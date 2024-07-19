const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { errorMiddleware } = require('./middlewares/errorMiddleware');
const { api } = require('./routes/api');

const app = express();

app.use(
  cors({
    origin: 'https://fs-mar24-codecrafters.github.io/react_phone-catalog/',
  }),
);
app.use(express.json());

app.use('/api', api);

app.use(errorMiddleware);

module.exports = { app };
