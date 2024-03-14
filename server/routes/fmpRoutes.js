const {RESTDataSource} = require('@apollo/datasource-rest')
require('dotenv').config;
const fmpkey = process.env.FMP_KEY;

class FinancialModelingAPI extends RESTDataSource {
        baseURL = `https://financialmodelingprep.com/api/v3/`

        async fetchBiggestGainers() {
            const data = await this.get('stock_market/gainers?apikey=' + fmpkey)
            return data.results
        }
}


module.exports = FinancialModelingAPI;