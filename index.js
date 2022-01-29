import axios from 'axios';

var coingecko_url = "https://api.coingecko.com/api/v3/coins/list"

const getCoins = async () => {
    const response = await axios.get(coingecko_url);
    console.log(response);
}

getCoins();
