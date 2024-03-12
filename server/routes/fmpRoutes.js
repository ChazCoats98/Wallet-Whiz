require('dotenv').config
const apikey = process.env.FMP_KEY

const fmp = require('financialmodelingprep')('KP1v8MgJqu09ri5OrVkNS0kTFynFycot')

fmp.market.sector_performance().then(response => console.log(response));