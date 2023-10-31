import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || process.env.LOCAL_PORT
const MONGODB_URI = process.env.MONGODB_URI
const BUCKET = process.env.GCLOUD_STORAGE_BUCKET
const clientID = process.env.clientID
const clientSecret = process.env.clientSecret
const URL = process.env.NODE_ENV === 'production' ? 'https://twitter-6t.lm.r.appspot.com' : 'http://localhost:5173'


const config = { 
  PORT,
  MONGODB_URI,
  BUCKET,
  clientID,
  clientSecret,
  URL
}

export default config