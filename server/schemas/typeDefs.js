const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        createdAt: String
        plaidAccessToken: String
        accounts: [Account]
        transactions: [Transaction]
        stocks: [Stock]
    }

    type Account {
        _id: ID
        account_id: String
        accountName: String
        balance: Float
    }

    type Transaction {
        _id: ID
        account_id: String
        amount: Float
        merchantName: String
        date: String
        category: String
    }

    type MarketGainers {
        _id: ID
        symbol: String
        name: String
        change: Float
        price: Float
        changesPercentage: Float
    }

    type MarketLosers {
        _id: ID
        symbol: String
        name: String
        change: Float
        price: Float
        changesPercentage: Float
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        accounts: [Account]
        transactions: [Transaction]
        fetchMarketGainers: [MarketGainers]
        fetchMarketLosers: [MarketLosers]
        _: Boolean
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        register(username: String!, email: String!, password: String!): Auth
        updateUsername(userId: ID!, username: String!): User
        updateEmail(userId: ID!, email: String!): User
        exchangePublicToken(publicToken: String!): AccessToken
        fetchPlaidData(accessToken: String!): PlaidDataResult
        uploadPhoto(photo: String): String
    }

    type AccessToken {
        access_token: String
    }

    type PlaidDataResult {
        savedAccounts: [Account]
        savedTransactions: [Transaction]
    }

    type stockResult {
        savedStocks: [Stock]
    }

`;

module.exports = typeDefs;