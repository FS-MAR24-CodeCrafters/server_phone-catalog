const express = require('express');
const { productsRouter } = require('./products.router');
const { phonesRouter } = require('./phones.router');
const { tabletsRouter } = require('./tabletsRouter');
const { accessoriesRouter } = require('./accessories.router');

const api = express.Router();

api.use('/products', productsRouter);
api.use('/phones', phonesRouter);
api.use('/tablets', tabletsRouter);
api.use('/accessories', accessoriesRouter);

module.exports = { api };
