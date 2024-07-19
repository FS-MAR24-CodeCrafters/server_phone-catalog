'use strict';

import { Sequelize } from 'sequelize';

import 'dotenv/config';

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

export { sequelize };
