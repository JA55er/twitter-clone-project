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

import { Storage } from '@google-cloud/storage';
import multer from 'multer';

const app = express();

const storage = new Storage();

const bucketName = 'tweet-portfolio.appspot.com';

const bucket = storage.bucket(bucketName);

const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });

mongoose.connect(config.MONGODB_URI);

const corsOptions = {
  origin: ['http://localhost:5173', 'https://tweet-portfolio.lm.r.appspot.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders:
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
};

app.use(cors(corsOptions));

app.options('*', cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('ping');
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('upload route');
  console.log(req);
  const file = req.file;
  console.log('file: ', file);
  res.status(200);
});
// if(!file) {
//   return res.status(400).send('No file uploaded')
// }

// const blob = bucket.file(file.originalname)

// const blobStream = blob.createWriteStream({
//   metadata: {
//     contentType: file.mimetype
//   }
// })

// console.log('blob:  ',blob)

// console.log('blob stream: ',blobStream)

// blobStream.on('error', (err) => {
//   console.error(err)
//   res.status(500).send('Error uploading file !!')
// })

// blobStream.on('finish', () => {
//   console.log('finish callback');
//   res.status(200).send('file uploaded successfully !!')
// })

// blobStream.end(file.buffer)

// console.log(file)
//   res.status(200)
// })

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/ping', pingRouter);
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
