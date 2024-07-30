const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { errorMiddleware } = require('./middlewares/errorMiddleware');
const { api } = require('./routes/api');

const app = express();

const whitelist = [
  'https://fs-mar24-codecrafters.github.io/react_phone-catalog/#/',
  'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', api);

app.use(errorMiddleware);

module.exports = { app };
