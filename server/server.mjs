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

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URI);

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter)

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
