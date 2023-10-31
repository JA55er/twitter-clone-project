import express from 'express';
import passport from 'passport';
import config from '../utils/config.mjs';

const googleRouter = express.Router();

// googleRouter.get('/', (req, res) => {
//   req.session.returnTo = req.query.returnTo;
//   console.log('req queries: ', req.query);
//   console.log('return to query: ', req.query.returnTo);
//   res.redirect('/auth/googlelogin');
// });

// googleRouter.get('/google', (req, res) => {
//   req.session.returnTo = req.query.returnTo;
//   console.log('req queries: ', req.query);
//   console.log('return to query: ', req.query.returnTo);
//   res.redirect('/api/auth/googlelogin');
// });

// googleRouter.get(
//   '/googlelogin',
//   passport.authenticate('google', { scope: ['profile'] })
// );

// googleRouter.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: config.URL }),
//   (req, res) => {
//     const returnTo = req.session.returnTo || config.URL;
//     console.log('callback return url: ', returnTo);
//     res.redirect(returnTo);
//   }
// );

export default googleRouter;
