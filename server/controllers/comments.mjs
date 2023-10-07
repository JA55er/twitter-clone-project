import express from 'express';
import Comment from '../models/comment.mjs';
import Tweet from '../models/tweet.mjs';
import User from '../models/user.mjs';

const commentsRouter = express.Router();

commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

commentsRouter.post('/newcomment', async (req, res) => {
  const user = req.user;
  if (!user) return res.status(404).send('token not found');
  try {
    const tweet = await Tweet.findById(req.body.tweet);
    // console.log(tweet)
    const newComment = new Tweet({
      text: req.body.commentText,
      attachment: null,
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
      stats: { ...tweet.stats, comments: tweet.stats.comments + 1},
    });

    // console.log('typeof comments: ', typeof(tweet.stats.comments))
    // console.log('typeof updatedTweet: ', typeof(updatedTweet.stats.comments))
    // console.log('typeof comments: ', typeof(newComment.stats.comments))

    // console.log('updated tweet: ', updatedTweet);

    // console.log('saved comment: ', savedComment);

    const newSavedComment = await Tweet.findById(savedComment._id).populate('user')

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
