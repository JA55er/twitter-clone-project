import express from 'express';
import passport from 'passport';
import config from '../utils/config.mjs';

const googleRouter = express.Router();

googleRouter.get('/', (req, res) => {
  req.session.returnTo = req.query.returnTo;
  console.log('req queries: ', req.query);
  console.log('return to query: ', req.query.returnTo);
  res.redirect('/api/google/googlelogin');
});

googleRouter.get(
  '/googlelogin',
  passport.authenticate('google', { scope: ['profile'] })
);

googleRouter.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: config.URL }),
  (req, res) => {
    const returnTo = req.session.returnTo || config.URL;
    console.log('callback return url: ', returnTo);
    if (req.session.returnTo) {
      console.log('closing window');
      res.send('<script>window.close();</script>');
    } else {
      res.redirect(returnTo);
    }
    // res.redirect(returnTo);
  }
);

googleRouter.get('/logout', (req, res) => {
  req.logout();
  const returnTo = req.session.returnTo || config.URL;
  req.session = null;
  res.redirect(returnTo);
});

export default googleRouter;
