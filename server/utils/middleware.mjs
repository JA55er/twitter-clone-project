import jwb from 'jsonwebtoken';
import User from '../models/user.mjs';

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('Authorization');
  if (authorization) {
    req.token = authorization;
  }
  next();
};

const userExtractor = async (req, res, next) => {
  const token = req.token;
  if (token) {
    try {
      const decodedToken = jwb.verify(token, process.env.SECRET);
      req.user = await User.findById(decodedToken.id);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        // Token has expired
        return next(new Error('Token expired'))
      } else {
        // Other token verification errors
        return next(error)
      }
    }
  }

  next();
};

const middleware = {
  tokenExtractor,
  userExtractor,
};

export default middleware;
