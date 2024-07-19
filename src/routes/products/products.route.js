const express = require('express');
const { httpGetAllProducts, httpCreateNewProduct } = require('../../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
productsRouter.post('/', httpCreateNewProduct)

module.exports = { productsRouter };
