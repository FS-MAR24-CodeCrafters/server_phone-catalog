import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { errorMiddleware } from './middlewares/errorMiddleware';
import { api } from  './routes/api';

const app = express();

app.use(
  cors({
    origin: 'https://fs-mar24-codecrafters.github.io/react_phone-catalog/',
  }),
);
app.use(express.json());

app.use('/api', api);

app.use(errorMiddleware);

export { app };
