var axios = require('axios');

const URL = 'https://www.alphavantage.co/query?apikey=2FZIVBF4TZA5XLXB';

module.exports = {
  getStock: function (inputValue,dataType) {
    var requestUrl = `${URL}&symbol=${inputValue}&${dataType}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }, 
}