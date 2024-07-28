const express = require('express');
const {
  httpGetPaginatedProducts,
  httpFillProductsTable,
} = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/:page', httpGetPaginatedProducts);
productsRouter.post('/', httpFillProductsTable);

module.exports = { productsRouter };
