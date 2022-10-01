import { config } from 'dotenv';
config();

import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

import 'express-async-errors';

import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import validate from './middleware/validate-data.js';

import mail from './routes/mail.js';

import express from 'express';
const app = express();

app.set('trust proxy', 1);
app.use(express.json());

app.use(
  rateLimiter({
    windowMs: 5 * 60 * 1000,
    max: 100,
  })
);
app.use(cors());
app.use(helmet());
app.use(xss());
app.use('/v1/sendMail', validate, mail);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = () => {
  app.listen(port, () => {
    console.log('App is Listening on port ' + port);
  });
};

start();
