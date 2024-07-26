const express = require('express');
const { productsRouter } = require('./products.router');
const { phonesRouter } = require('./phones.router');

const api = express.Router();

api.use('/products', productsRouter);
api.use('/phones', phonesRouter);
api.use('/tablets', tabletsRouter);

module.exports = { api };
