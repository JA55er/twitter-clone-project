import jwb from 'jsonwebtoken'
import User from '../models/user.mjs'

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('Authorization')
  if (authorization) {
    req.token = authorization
  }
  next()
}

const userExtractor = async (req, res, next) => {
  const token = req.token
  if(token) {
    const decodedToken = jwb.verify(token, process.env.secret)
    req.user = await User.findById(decodedToken.id)
  }
  
  next()
}

const middleware = {
  tokenExtractor,
  userExtractor
}

export default middleware


