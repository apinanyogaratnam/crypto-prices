import cryptoPrices from '@apinanyogaratnam/crypto-prices';

// returns all coins available to view price (id, symbol, and name)
const getAllCoins = async () => {
  const prices = await getCoins();
  console.log(prices);
};

// returns price of a coin
const getCoinPrice = async (coinId) => {
  const prices = await getPrice(coinId);
  console.log(prices[coin]);
};

getCoinPrice('bitcoin');
