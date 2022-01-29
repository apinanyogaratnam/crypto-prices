import axios from 'axios';

const getCoins = async () => {
    let response;

    try {
        response = await axios.get("https://api.coingecko.com/api/v3/coins/list");
    } catch (error) {
        return error;
    }
    
    return response.data
}

const getPrice = async (coinId) => {
    let response;

    try {
        response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
    } catch (error) {
        return error;
    }
    
    return response.data
}
