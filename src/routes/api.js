import express from 'express';
import { productsRouter } from './products/products.route';

const api = express.Router();

api.use('/products', productsRouter);

export { api };
