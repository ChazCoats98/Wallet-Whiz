const { Schema } = require('mongoose');

const stockSchema = new Schema({
   account_id: {
        type: String,
    },
    symbol: {
        type: String,
    },
    price: {
        type: Number,
    },
    mktCap: {
        type: Number,
    },
    changes: {
        type: Number,
    },
    companyName: {
        type: String,
    },
    exchange: {
        type: String,
    },
    industry: {
        type: String,
    },
    sector: {
        type: String,
    },
    image: {
        type: String,
    }
});

module.exports = stockSchema;