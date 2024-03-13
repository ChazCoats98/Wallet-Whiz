require('dotenv').config
const axios = require('axios')


axios.get('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=KP1v8MgJqu09ri5OrVkNS0kTFynFycot')
                .then((response) => {console.log(response)});