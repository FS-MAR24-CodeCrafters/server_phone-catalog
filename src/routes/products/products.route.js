const express = require('express');
const { httpGetAllProducts, httpCreateNewProducts } = require('../../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
productsRouter.post('/', httpCreateNewProducts)

module.exports =  { productsRouter };
