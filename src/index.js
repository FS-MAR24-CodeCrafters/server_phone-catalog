'use strict';

import http from 'http';

import 'dotenv/config';

import { app } from './app';
import { Product } from './models/Product.model';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  Product.sync({ force: true });
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
