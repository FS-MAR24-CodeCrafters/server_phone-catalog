import express from 'express';
import { httpGetAllProducts, httpCreateNewProducts } from '../../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
productsRouter.post('/', httpCreateNewProducts)

export { productsRouter };
