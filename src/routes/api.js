const express = require('express');
const { productsRouter } = require('./products/products.route');

const api = express.Router();

api.use('/products', productsRouter);

module.exports = { api };
