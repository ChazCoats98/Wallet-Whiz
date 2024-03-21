import { gql } from '@apollo/client';

export const USER = gql`
    query user {
        user {
            _id
            username
            email
            createdAt
            plaidAccessToken
        }
    }
`;

export const ACCOUNTS = gql`
    query accounts {
        accounts {
            _id
            accountName
            balance
        }
    }
`;

export const TRANSACTIONS = gql`
    query transactions {
        transactions {
            _id
            amount
            merchantName
            date
            category
        }
    }
`;

export const MARKETGAINERS = gql`
query fetchMarketGainers {
    fetchMarketGainers {
        _id
        symbol
        name
        change
        price
        changesPercentage
    }
}`

export const MARKETLOSERS = gql`
query fetchMarketLosers {
    fetchMarketLosers {
        _id
        symbol
        name
        change
        price
        changesPercentage
    }
}`

export const GET_STOCKS = gql`
query fetchStocksByTicker {
    fetchStocksByTicker {
        _id
        symbol
        price
        mktCap
        changes
        companyName
        exchange
        industry
        sector
        image
    }
}`
