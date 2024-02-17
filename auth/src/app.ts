import express from 'express';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@sbticketingudemy/ticketing-udemy-common';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export { app };