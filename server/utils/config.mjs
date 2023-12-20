import dotenv from 'dotenv'
dotenv.config()


const isLocalhost = process.env.NODE_ENV === 'development' && process.env.LOCALHOST === 'true';
const developmentURL = isLocalhost ? 'http://localhost:5173' : 'http://192.168.0.179:5173';

const PORT = process.env.PORT || process.env.LOCAL_PORT
const MONGODB_URI = process.env.MONGODB_URI
const BUCKET = process.env.GCLOUD_STORAGE_BUCKET
const clientID = process.env.clientID
const clientSecret = process.env.clientSecret
const URL = process.env.NODE_ENV === 'production' ? 'https://twitter-6t.lm.r.appspot.com/' : developmentURL
// const URL = process.env.NODE_ENV === 'production' ? 'https://twitter-6t.lm.r.appspot.com/' : 'http://localhost:5173/'
const cookieSessionKey = process.env.cookieSessionKey

const config = { 
  PORT,
  MONGODB_URI,
  BUCKET,
  clientID,
  clientSecret,
  URL,
  cookieSessionKey
}

export default config