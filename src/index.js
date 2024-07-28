'use strict';

const http = require('http');

require('dotenv').config();

const { app } = require('./app');
const { Accessory } = require('./models/accessory.pg');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  Accessory.sync();
  console.log(`Listening on port ${PORT}`);
});
