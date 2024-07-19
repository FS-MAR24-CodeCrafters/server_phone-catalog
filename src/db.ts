'use strict';

import { Sequelize } from 'sequelize';

import 'dotenv/config';

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
const DBUrl = process.env.POSTGRES_LINK;

if (!DBUrl) {
  throw Error('There are no db url')
}


const sequelize = new Sequelize(DBUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export {
  sequelize,
};
