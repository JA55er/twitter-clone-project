import express from 'express';
import axios from 'axios';

import Tweet from '../models/tweet.mjs';
import User from '../models/user.mjs';

const tweetsRouter = express.Router();

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

tweetsRouter.get('/', async (req, res) => {
  const tweets = await Tweet.find({ parent: null }).populate('user', [
    'icon',
    'username',
  ]);

  if (!tweets) res.send('no tweets found');

  const reverseTweets = [...tweets];

  reverseTweets.reverse();

  res.send(reverseTweets);
});
tweetsRouter.get('/:id', async (req, res) => {
  // const tweet = await Tweet.findById(req.params.id).populate('user', ['icon', 'username']).populate({path: 'comments', select: 'user', populate: 'user'});
  const tweet = await Tweet.findById(req.params.id)
    .populate('user', ['icon', 'username'])
    .populate({
      path: 'tweets',
      populate: { path: 'user', select: 'username icon' },
    });
  // console.log('tweet: ', tweet);
  res.send(tweet);
});

tweetsRouter.post('/newtweet', async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).send('token not found');
  }
  try {
    //get random generated image
    const newImage = await axios.get('https://picsum.photos/680/510');
    const imageURL = newImage.request.res.responseUrl;
    // const comments = Math.floor(getRandomArbitrary(2, 7));
    const retweets = Math.floor(getRandomArbitrary(2, 7));
    const likes = Math.floor(getRandomArbitrary(2 * 5, 5 * 10));
    const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));

    const tweetText = req.body.tweetText;

    const newTweet = new Tweet({
      text: tweetText,
      attachment: imageURL,
      stats: {
        comments: 0,
        retweets,
        likes,
        views,
      },
      parent: null,
      user: user._id.valueOf(),
    });

    // console.log('new tweet: Object before save: ', newTweet);
    const savedTweet = await newTweet.save();
    user.tweets = user.tweets.concat(savedTweet._id);
    await User.findByIdAndUpdate(user._id, { tweets: user.tweets });
    res.status(201).send(savedTweet);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// tweetsRouter.delete('/deleteall', async (req, res) => {
//   await Tweet.deleteMany({});
//   res.send('deleted');
// });

// tweetsRouter.post('/newautotweet', async (req, res) => {
//   const user = req.user;
//   if (!user) {
//     res.status(404).send('user not found');
//   }
//   try {
//     //get random generated tweet message
//     const newTweetText = await axios.get(
//       'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
//     );
//     const tweetText = newTweetText.data[0];
//     //get random generated image
//     const newImage = await axios.get('https://picsum.photos/680/510');
//     const imageURL = newImage.request.res.responseUrl;

//     const comments = Math.floor(getRandomArbitrary(2, 7));
//     const retweets = Math.floor(getRandomArbitrary(2, 7));
//     const likes = Math.floor(getRandomArbitrary(comments * 5, comments * 10));
//     const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));

//     const newTweet = new Tweet({
//       text: tweetText,
//       attachment: imageURL,
//       stats: {
//         comments,
//         retweets,
//         likes,
//         views,
//       },
//       user: user._id.valueOf(),
//     });
//     const savedTweet = await newTweet.save();
//     user.tweets = user.tweets.concat(savedTweet._id);
//     await User.findByIdAndUpdate(user._id, { tweets: user.tweets });
//     res.status(201).send(savedTweet);
//   } catch (error) {
//     console.error(error);
//     res.status(500);
//   }
// });

export default tweetsRouter;
