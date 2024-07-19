'use strict';

const { Sequelize } = require('sequelize');

require('dotenv').config();

/* const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

const sequelize = new Sequelize({
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  host: POSTGRES_HOST,
  dialect: 'postgres',
  port: Number(POSTGRES_PORT),
  password: POSTGRES_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}); */
/* const DBUrl = process.env.POSTGRES_LINK;

if (!DBUrl) {
  throw Error('There are no db url')
} */

const sequelize = new Sequelize(process.env.POSTGRES_LINK, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = { sequelize };
