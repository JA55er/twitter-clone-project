import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRouter from './controllers/users.mjs';
import tweetsRouter from './controllers/tweets.mjs';
import config from './utils/config.mjs';
import loginRouter from './controllers/login.mjs';
import middleware from './utils/middleware.mjs';
import commentsRouter from './controllers/comments.mjs';
import likesRouter from './controllers/likes.mjs';
import pingRouter from './controllers/ping.mjs';

import passport from 'passport';
import cookieSession from 'cookie-session';
import googleRouter from './controllers/googleLogin.mjs';
import * as passportSetup from './passport.mjs';

import { createServer } from 'http';
// import { Server } from 'socket.io';
import socketSetup from './socketSetup.mjs';

const app = express();

const httpServer = createServer(app);

socketSetup(httpServer);

mongoose.connect(config.MONGODB_URI);

console.log(process.env.NODE_ENV);

const CLIENT_URL = config.URL;

console.log('CLIENT URL: ', CLIENT_URL);

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://twitter-6t.lm.r.appspot.com',
    'http://192.168.0.179:5173',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders:
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
};

app.use(cors(corsOptions));

app.options('*', cors());
app.use(express.json());

app.enable('trust proxy');

if (process.env.NODE_ENV === 'production') {
  app.use(
    cookieSession({
      name: 'session',
      secret: config.cookieSessionKey,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: 'none',
    })
  );
} else {
  app.use(
    cookieSession({
      name: 'session',
      secret: config.cookieSessionKey,
      maxAge: 24 * 60 * 60 * 1000,
    })
  );
}

app.use(passport.initialize({ userProperty: 'googleUser' }));
app.use(passport.session());

console.log(config.URL);

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/ping', pingRouter);
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);
app.use('/api/google', googleRouter);

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
