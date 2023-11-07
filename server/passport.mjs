import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: '/api/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('google strategy profile: ', profile);
      return done(null, profile);
    }
  )
);

passport.deserializeUser((obj, done) => {
  // console.log('deserialize');
  // console.log('deserialized object: ', obj);
  done(null, obj);
});

passport.serializeUser((user, done) => {
  // console.log('serialized!');
  // console.log('serialized user: ', user);
  done(null, user);
});

export default passport