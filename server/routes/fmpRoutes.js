const {RESTDataSource} = require('@apollo/datasource-rest')



class FinancialModelingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://financialmodelingprep.com/api/v3/';
    }

    async fetchGainers() {
        const data = await this.get(`stock_market/gainers?apikey=${process.env.FMP_KEY}`);
        return data;
    }

    async fetchLosers() {
        const data = await this.get(`stock_market/losers?apikey=${process.env.FMP_KEY}`);
        return data;
    }
}



module.exports = FinancialModelingAPI;