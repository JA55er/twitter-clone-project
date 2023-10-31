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
import passportGoole from 'passport-google-oauth20';
import cookieSession from 'cookie-session';
import User from './models/user.mjs';
import googleRouter from './controllers/googleLogin.mjs';

const GoogleStrategy = passportGoole.Strategy;

const app = express();

mongoose.connect(config.MONGODB_URI);

console.log(process.env.NODE_ENV);

// const CLIENT_URL = 'http://localhost:5173'
const CLIENT_URL = config.URL;
console.log(CLIENT_URL);

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

app.use(
  cookieSession({
    name: 'session',
    keys: ['cookieSessionKeys'],
    maxAge: 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
// app.use(passport.initialize({ userProperty: 'googleUser' }));
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: '/google/callback',
      // callbackURL: '/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('google strategy profile: ', profile)
      return done(null, profile);
    }
  )
);

passport.deserializeUser((obj, done) => {
  console.log('deserialize');
  console.log('deserialized object: ', obj);
  done(null, obj);
});

passport.serializeUser((user, done) => {
  console.log('serialized!');
  console.log('serialized user: ', user )
  done(null, user);
});

// app.get('/auth/googlelogin', (req, res) => {
//   req.session.returnTo = req.query.returnTo;
//   console.log('req queries: ', req.query);
//   console.log('return to query: ', req.query.returnTo);
//   res.redirect('/auth/google');
// });

app.get('/google', passport.authenticate('google', { scope: ['profile'] }));
// app.get(
//   '/auth/googlelogin',
//   passport.authenticate('google', { scope: ['profile'] })
// );

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

app.get('/login/success', (req, res) => {
  console.log('inside success');
  console.log('req user: ', req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      //   cookies: req.cookies
    });
    return;
  } else {
    console.log('no user');
    res.status(400).json({
      message: 'No user found',
    });
  }
});

app.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});
// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: config.URL }),
//   (req, res) => {
//     const returnTo = req.session.returnTo || config.URL;
//     console.log('callback return url: ', returnTo);
//     res.redirect(returnTo);
//   }
// );
// app.get(
//   '/auth/google/callback',
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

app.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect(config.URL);
});

// app.get('/logout', (req, res) => {
//   req.logout();
//   delete req.session.returnTo;
//   res.redirect(config.URL);
// });

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/ping', pingRouter);
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);
app.use('/api/auth', googleRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
