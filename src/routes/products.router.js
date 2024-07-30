const express = require('express');
const {
  httpGetProducts,
  httpFillProductsTable,
  httpGetAllFavourites,
  httpGetAllCartProducts,
  httpGetAllFilteredProducts,
} = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetProducts);
productsRouter.get('/favourites/:ids', httpGetAllFavourites);
productsRouter.get('/cart/:ids', httpGetAllCartProducts);
productsRouter.get('/slider', httpGetAllFilteredProducts);
productsRouter.post('/', httpFillProductsTable);

module.exports = { productsRouter };
