'use strict';

const { Sequelize } = require('sequelize');

require('dotenv').config();

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
