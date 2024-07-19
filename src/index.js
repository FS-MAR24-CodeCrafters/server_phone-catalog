'use strict';

const http = require('http');

require('dotenv').config();

const { app } = require('./app');
const { Product } = require('./models/Product.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  Product.sync({ force: true });
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
