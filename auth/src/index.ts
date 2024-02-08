import express from 'express';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
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

const start = async () => {
  if( !process.env.JWT_KEY ) {
    throw new Error('JWT_KEY must be defined');
  }

  
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/ticketing-auth');
    console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000..!!');
  });
}

start();