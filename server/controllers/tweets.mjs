import express from 'express';
import axios from 'axios';

import Tweet from '../models/tweet.mjs';
import User from '../models/user.mjs';

const tweetsRouter = express.Router();

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

tweetsRouter.get('/', async (req, res) => {
  const tweets = await Tweet.find().populate('user', 'icon');

  res.send(tweets);
});

tweetsRouter.post('/newtweet', async (req, res) => {
  const user = req.user;
  // console.log(user)
  if (!user) {
    return res.status(404).send('token not found');
  }
  try {
    //get random generated image
    const newImage = await axios.get('https://picsum.photos/680/510');
    const imageURL = newImage.request.res.responseUrl;
    const comments = Math.floor(getRandomArbitrary(2, 7));
    const retweets = Math.floor(getRandomArbitrary(2, 7));
    const likes = Math.floor(getRandomArbitrary(comments * 5, comments * 10));
    const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));

    const tweetText = req.body.tweetText;

    const newTweet = new Tweet({
      text: tweetText,
      attachment: imageURL,
      stats: {
        comments,
        retweets,
        likes,
        views,
      },
      user: user._id.valueOf(),
    });

    console.log(newTweet);
    const savedTweet = await newTweet.save();
    user.tweets = user.tweets.concat(savedTweet._id);
    await User.findByIdAndUpdate(user._id, { tweets: user.tweets });
    res.status(201).send(savedTweet);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

tweetsRouter.post('/newautotweet', async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(404).send('user not found');
  }
  try {
    //get random generated tweet message
    const newTweetText = await axios.get(
      'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
    );
    const newText = newTweetText.data[0];
    //get random generated image
    const newImage = await axios.get('https://picsum.photos/680/510');
    const imageURL = newImage.request.res.responseUrl;

    const comments = Math.floor(getRandomArbitrary(2, 7));
    const retweets = Math.floor(getRandomArbitrary(2, 7));
    const likes = Math.floor(getRandomArbitrary(comments * 5, comments * 10));
    const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));

    const newTweet = new Tweet({
      text: newText,
      attachment: imageURL,
      stats: {
        comments,
        retweets,
        likes,
        views,
      },
    });

    // console.log(user)

    // const savedTweet = await newTweet.save();
    // console.log(savedTweet);
    res.status(200);
    // res.status(201).send(savedTweet);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export default tweetsRouter;
