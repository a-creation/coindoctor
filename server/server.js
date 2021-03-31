const express = require('express');
const app = express();
const path = require('path');
const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

// uncomment the below for proxy challenge


// console.log(process.env.NODE_ENV)
CoinGeckoClient.coins.fetch('defiat')
  .then(data => console.log(data.data.symbol, data.data.market_data.current_price.usd))
  .catch(err => console.log(err))

  // statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/

