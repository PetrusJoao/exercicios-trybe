const fetch = require('node-fetch');

const ApiUrl = 'https://api.coincap.io/v2/assets';

const fecthCoins = async () => {
  const fetchAssets = await fetch(ApiUrl)
    .then((response) => response.json())
    .then((data) => data)
    console.log(fetchAssets);
    return fetchAssets;
}

const getCoinNames = async () => {
  const fecthCoinName = await fetch()
}

fecthCoins();