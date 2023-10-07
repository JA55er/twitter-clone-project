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

const app = express();

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


// app.use(cors({
//   origin:
// }))

// app.use(
//   cors({
//     origin: 'https://tweet-portfolio.lm.r.appspot.com',
//     methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
//   })
// );

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Origin', 'https://tweet-portfolio.lm.r.appspot.com');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.use(
//   cors({
//     origin: 'https://tweet-portfolio.lm.r.appspot.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'Authorization,Content-Type',
//   })
// );

// Enable CORS with specific headers
// app.use(
//   cors({
//     origin: 'https://tweet-portfolio.lm.r.appspot.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'Authorization,Content-Type',
//   })
// );

// app.use((req, res, next) => {
//   res.header(
//     'Access-Control-Allow-Origin',
//     'https://tweet-portfolio.lm.r.appspot.com'
//   );
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

// console.log('1');

mongoose.connect(config.MONGODB_URI);

app.get('/', (req, res) => {
  res.send('ping');
});

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);

// const PORT = config.PORT;

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
