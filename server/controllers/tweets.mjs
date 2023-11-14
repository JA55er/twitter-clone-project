import express from 'express';

import Tweet from '../models/tweet.mjs';
import User from '../models/user.mjs';

// import { Storage } from '@google-cloud/storage';
import multer from 'multer';

// import getTimestamp from '../utils/getTimestamp.mjs';
// import config from '../utils/config.mjs';
import uploadImageToGoogle from '../utils/uploadImageToGoogle.mjs';

// const storage = new Storage();

// const bucketName = config.BUCKET;

// const bucket = storage.bucket(bucketName);

const tweetsRouter = express.Router();

const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });

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
  res.send(tweet);
});

tweetsRouter.post('/newtweet', upload.single('file'), async (req, res) => {
  const user = req.user;
  const file = req.file;
  if (!user) {
    console.log('token not found');
    return res.status(404).send('token not found');
  }
  if (!file && !req.body.tweetText) {
    console.log('must provide image or text')
    return res.status(404).send('must provide image or text');
  }
  if (file && file.size > 1024 * 1024) {
    console.log('file too large')
    return res.status(413).send('file too large, max size 1MB')
  }
  try {
    //get random generated image
    // const newImage = await axios.get('https://picsum.photos/680/510');
    // const imageURL = newImage.request.res.responseUrl;
    // const comments = Math.floor(getRandomArbitrary(2, 7));
    const retweets = Math.floor(getRandomArbitrary(2, 7));
    const likes = Math.floor(getRandomArbitrary(2 * 5, 5 * 10));
    const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));
    let imageURL = null;
    const tweetText = req.body.tweetText;
    
    if (file) {
      imageURL = await uploadImageToGoogle(file)
      console.log(imageURL)
      // try {
      //   const timestamp = getTimestamp();
      //   const blob = bucket.file(`${timestamp}${file.originalname}`);
      //   const blobStream = blob.createWriteStream({
      //     metadata: {
      //       contentType: file.mimetype,
      //     },
      //   });

      //   await new Promise((resolve, reject) => {
      //     blobStream.on('error', (err) => {
      //       console.error('Error uploading file !!', err);
      //       reject(err);
      //     });

      //     blobStream.on('finish', () => {
      //       console.log('file uploaded successfully !!');
      //       imageURL = `https://storage.googleapis.com/twitter-6t.appspot.com/${timestamp}${file.originalname}`;
      //       resolve();
      //     });
      //     blobStream.end(file.buffer);
      //   });
      // } catch (err) {
      //   console.log('error uploading file');
      // }
    }

    const newTweet = new Tweet({
      text: tweetText,
      attachment: imageURL,
      stats: {
        comments: 0,
        retweets: retweets,
        likes: likes,
        views: views,
      },
      parent: null,
      user: user._id.valueOf(),
    });

    const savedTweet = await newTweet.save();

    user.tweets = user.tweets.concat(savedTweet._id);
    await User.findByIdAndUpdate(user._id, { tweets: user.tweets });

    const newSavedTweet = await Tweet.findById(savedTweet._id)
      .populate('user', ['icon', 'username'])
      .populate({
        path: 'tweets',
        populate: { path: 'user', select: 'username icon' },
      });

    res.status(201).send(newSavedTweet);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// tweetsRouter.delete('/deleteall', async (req, res) => {
//   await Tweet.deleteMany({});
//   await User.deleteMany({})
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
