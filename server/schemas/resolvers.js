const { User, Account, Transaction, Stocks } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const plaidClient = require('../config/plaid');
const { formattedStartDate, formattedEndDate } = require('../utils/date');
const cloudinary = require('cloudinary');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');



const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            console.log(context.authMiddleware)
            if (context.user) {
                return User.findById(context.user._id).select('username email createdAt plaidAccessToken');
            } else {
                throw AuthenticationError;
            }
        },
        accounts: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('accounts');
                return user.accounts;
            } else {
                throw AuthenticationError;
            }
        },
        transactions: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('transactions');
                return user.transactions;
            } else {
                throw AuthenticationError;
            }
        }, 
        fetchMarketGainers: async (_, __, { dataSources }) => {
            const data = await dataSources.financialModelingAPI.fetchGainers();
            const dataWithId = data.map((data) => ({
                _id: uuidv4(),
                symbol: data.symbol,
                name: data.name,
                change: data.change,
                price: data.price,
                changesPercentage: data.changesPercentage,
            }))
            return dataWithId;
        }, 
        fetchMarketLosers: async (_, __, { dataSources }) => {
            const data = await dataSources.financialModelingAPI.fetchLosers();
            const dataWithId = data.map((data) => ({
                _id: uuidv4(),
                symbol: data.symbol,
                name: data.name,
                change: data.change,
                price: data.price,
                changesPercentage: data.changesPercentage,
            }))
            return dataWithId;
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            console.log(email, password);
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token };
        },
        register: async (parent, { username, email, password, createdAt }) => {
            const user = await User.create({ username, email, password, createdAt: new Date() });
            const token = signToken(user);

            return { token, user };
        },
        updateUsername: async (parent, { userId, username }) => {
            return User.findByIdAndUpdate(userId, { $set: { username } }, { new: true });
        },
        updateEmail: async (parent, { userId, email }) => {
            return User.findByIdAndUpdate(userId, { $set: { email } }, { new: true });
        },
        uploadPhoto: async (_, { photo }) => {
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_KEY,
                api_secret: process.env.CLOUD_SECRET
            });

            try {
                const result = await cloudinary.v2.uploader.upload(photo, {
                    allowed_formats: ['jpg', 'png'],
                    public_id: '',
                    folder: 'walletwhiz'
                })
            } catch (error) {
                return `Image upload failed: ${error.message}`;
            }
            console.log(result.url);
        },
        exchangePublicToken: async (parent, { publicToken }, contextValue) => {
            console.log(contextValue);
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const plaidResponse = await plaidClient.itemPublicTokenExchange({
                    public_token: publicToken,
                });

                const accessToken = plaidResponse.data.access_token;

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { plaidAccessToken: accessToken }
                );

                return { access_token: accessToken };
            } catch (err) {
                console.log(err);
                throw new Error('Failed to exchange token.');
            }
        },
        fetchPlaidData: async (parent, { accessToken }, context) => {
            console.log(context)
            try {
                const accountsResponse = await plaidClient.accountsGet({
                    access_token: accessToken
                });
                const accounts = accountsResponse.data.accounts;
                console.log(accounts);

                const transactionsResponse = await plaidClient.transactionsGet({
                    access_token: accessToken,
                    start_date: formattedStartDate,
                    end_date: formattedEndDate,
                });
                const transactions = transactionsResponse.data.transactions;
                console.log(transactions);

                const user = await User.findById(contextValue.user._id);

                const savedAccounts = await Promise.all(
                    accounts.map(async (account) => {
                        const plaidAccountData = {
                            account_id: account.account_id,
                            accountName: account.name,
                            balance: account.balances.current,
                        };
                        return plaidAccountData;
                    })
                );

                const savedTransactions = await Promise.all(
                    transactions.map(async (transaction) => {
                        const plaidTransactionData = {
                            account_id: transaction.account_id,
                            amount: transaction.amount,
                            merchantName: transaction.merchant_name || transaction.name,
                            date: transaction.date,
                            category: transaction.personal_finance_category.primary || transaction.personal_finance_category.detailed,
                        };
                        return plaidTransactionData;
                    })
                );

                user.accounts = [];
                user.transactions = [];

                user.accounts = [...savedAccounts];
                user.transactions = [...savedTransactions];

                await user.save();

                return {
                    user,
                    savedAccounts,
                    savedTransactions,
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to retrieve Plaid data');
            }
        },
        fetchStocksByTicker: async ( parent, __, contextValue) => {
            console.log(contextValue)
            try {
                const data = await contextValue.dataSources.financialModelingAPI.fetchByTicker("AAPl");
                const dataWithId = data.map((data) => ({
                    _id: uuidv4(),
                    account_id: context.user._id,
                    symbol: data.symbol,
                    price: data.price,
                    mktCap: data.mktCap,
                    changes: data.changes,
                    companyName: data.companyName,
                    exchange: data.exchange,
                    industry: data.industry,
                    sector: data.sector,
                    image: data.image
                }))
                
                const user = await User.findById(context.user._id);
                const savedStocks = await Promise.all(dataWithId);
    
                user.stocks = [];
                user.stocks = [...savedStocks];
    
                await user.save();
    
                return {
                    user,
                    savedStocks
                }
            } catch (err) {
                console.error(err);
                throw new Error(err);
            }
        }
    }
}

module.exports = resolvers;