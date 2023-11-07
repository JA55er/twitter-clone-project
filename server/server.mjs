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
// import * as path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

import * as passportSetup from './passport.mjs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const GoogleStrategy = passportGoogle.Strategy;

const app = express();

mongoose.connect(config.MONGODB_URI);

console.log(process.env.NODE_ENV);

const CLIENT_URL = config.URL;

console.log('CLIENT URL: ', CLIENT_URL);

const corsOptions = {
  origin: ['http://localhost:5173', 'https://twitter-6t.lm.r.appspot.com'],
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

// app.get('/auth/googlelogin', (req, res) => {
//   req.session.returnTo = req.query.returnTo;
//   console.log('req queries: ', req.query);
//   console.log('return to query: ', req.query.returnTo);
//   res.redirect('/auth/google');
// });

// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
//   res.sendFile(
//     path.join(__dirname, '../client/dist', '../client/dist/index.html')
//   );
// });

// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile'] })
// );

// app.get('/google/callback', passport.authenticate('google'), (req, res) => {
//   // Handle the successful login, e.g., store user information, close the popup, and redirect
//   // res.send('<script>window.close();</script>');
// });

// app.get('/login/failed', (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: 'failure',
//   });
// });
// app.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: config.URL }),
//   (req, res) => {
//     const returnTo = req.session.returnTo || config.URL;
//     console.log('callback return url: ', returnTo);
//     res.redirect(returnTo);
//   }
// );

app.get('/test', (req, res) => {
  const a = req.query.a;
  console.log(a);
  res.send(a);
});

console.log(config.URL);

// app.get('/logout', (req, res) => {
//   req.logout();
//   const returnTo = req.session.returnTo || config.URL;
//   req.session = null;
//   res.redirect(returnTo);
// });

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

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
