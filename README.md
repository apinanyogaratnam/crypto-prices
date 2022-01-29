# Crypto Prices

## Get started
1. npm install @apinanyogaratnam/crypto-prices

### Sample usage
```
import cryptoPrices from '@apinanyogaratnam/crypto-prices';

// returns all coins available to view price (id, symbol, and name)
const cryptoPrices = async () => {
  const prices = await getCoins();
  console.log(prices);
};

// returns price of a coin
const cryptoPrices = async (coinId) => {
  const prices = await getPrice(coinId);
  console.log(prices[coin]);
};

cryptoPrices('bitcoin');
```

