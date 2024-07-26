const express = require('express');
const {
  httpGetAllProducts,
  httpFillProductsTable,
} = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.post('/', httpFillProductsTable);

module.exports = { productsRouter };
