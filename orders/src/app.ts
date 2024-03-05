import express from 'express';

import { errorHandler, NotFoundError, currentUser } from '@sbticketingudemy/ticketing-udemy-common';
import cookieSession from 'cookie-session';

import { indexOrderRouter } from './routes/index';
import { showOrderRouter } from './routes/show';
import { newOrderRouter } from './routes/new';
import { deleteOrderRouter } from './routes/delete';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

// app.use(currentUser);

app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(newOrderRouter);
app.use(deleteOrderRouter);

app.all('*', async (req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export { app };