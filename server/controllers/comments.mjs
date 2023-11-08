import express from 'express';
import Comment from '../models/comment.mjs';
import Tweet from '../models/tweet.mjs';
import User from '../models/user.mjs';
import multer from 'multer';
import uploadImageToGoogle from '../utils/uploadImageToGoogle.mjs';

const commentsRouter = express.Router();

const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });

commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

commentsRouter.post('/newcomment', upload.single('file'), async (req, res) => {
  const user = req.user;
  const file = req.file;
  console.log(req.body);
  if (!user) {
    console.log('token not found');
    return res.status(404).send('token not found');
  }
  if (!file && !req.body.commentText) {
    console.log('must provide image or text');
    return res.status(404).send('must provide image or text');
  }
  if (file && file.size > 1024 * 1024) {
    console.log('file too large');
    return res.status(413).send('file too large, max size 1MB');
  }

  let imageURL = null;

  if (file) {
    imageURL = await uploadImageToGoogle(file);
  }
  try {
    const tweet = await Tweet.findById(req.body.tweet);
    // console.log(tweet)
    const newComment = new Tweet({
      text: req.body.commentText,
      attachment: imageURL,
      stats: {
        comments: 0,
        retweets: 0,
        likes: 0,
        views: 0,
      },
      user: user._id.valueOf(),
      parent: tweet._id,
    });
    const savedComment = await newComment.save();
    user.tweets = user.tweets.concat(savedComment._id);
    tweet.tweets = tweet.tweets.concat(savedComment._id);
    // console.log('found tweet: ', tweet);
    await User.findByIdAndUpdate(user._id, { tweets: user.tweets });
    const updatedTweet = await Tweet.findByIdAndUpdate(tweet._id, {
      tweets: tweet.tweets,
      stats: { ...tweet.stats, comments: tweet.stats.comments + 1 },
    });

    const newSavedComment = await Tweet.findById(savedComment._id).populate(
      'user'
    );

    res.status(201).send(newSavedComment);
  } catch (error) {
    console.log(error);
    res.status(500).send('failed');
  }
});
// commentsRouter.post('/newcomment', async (req, res) => {
//   const user = req.user;
//   if (!user) return res.status(404).send('token not found');
//   try {
//     const tweet = await Tweet.findById(req.body.tweet)
//     const newComment = new Comment({
//       commentText: req.body.commentText,
//       user: user._id.valueOf(),
//       tweet
//     })
//     const savedComment = await newComment.save()
//     user.comments = user.comments.concat(savedComment._id)
//     tweet.comments = tweet.comments.concat(savedComment._id)
//     await User.findByIdAndUpdate(user._id, {comments: user.commnets})
//     await Tweet.findByIdAndUpdate(tweet._id, {comments: tweet.comments})
//     console.log(savedComment)
//     res.status(201).send(savedComment)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send('failed')
//   }
// });

export default commentsRouter;
