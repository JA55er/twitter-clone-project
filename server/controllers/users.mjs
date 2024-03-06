import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import User from '../models/user.mjs';
import bcrypt from 'bcrypt';
import jwb from 'jsonwebtoken';
import uploadImageToGoogle from '../utils/uploadImageToGoogle.mjs';
import { Storage } from '@google-cloud/storage';
import config from '../utils/config.mjs';
import uploadGoogleIcon from '../utils/uploadGoogleIcon.mjs';
import getTimestamp from '../utils/getTimestamp.mjs';
import Tweet from '../models/tweet.mjs';

const storage = new Storage();
const bucketName = config.BUCKET;
const bucket = storage.bucket(bucketName);

const usersRouter = express.Router();

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

usersRouter.post('/newuser', async (req, res) => {
  const body = req.body;
  const saltRounds = 10;
  try {
    if (body.password.length >= 3) {
      //get random generated tweet message
      const newBioText = await axios.get(
        'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
      );
      const bioText = newBioText.data[0];
      //get random generated image
      // const newCover = await axios.get(`https://picsum.photos/${Math.floor(getRandomArbitrary(200, 1000))}/${Math.floor(getRandomArbitrary(200, 1000))}`);
      const newCover = await axios.get(`https://picsum.photos/600/200`);
      const coverUrl = newCover.request.res.responseUrl;

      const following = Math.floor(getRandomArbitrary(2, 15));
      const followers = Math.floor(getRandomArbitrary(2, 15));
      // const likes = Math.floor(getRandomArbitrary(comments * 5, comments * 10));
      // const views = Math.floor(getRandomArbitrary(likes * 5, likes * 15));

      const passwordHash = await bcrypt.hash(body.password, saltRounds);
      const randomIcon = await axios.get('https://picsum.photos/200/200');
      const icon = randomIcon.request.res.responseUrl;
      const user = new User({
        username: body.username,
        passwordHash,
        icon,
        info: {
          cover: coverUrl,
          bio: bioText,
          following,
          followers,
        },
      });

      const savedUser = await user.save();

      const userForToken = {
        username: savedUser.username,
        id: savedUser._id.valueOf(),
      };

      const token = jwb.sign(userForToken, process.env.SECRET);

      const newUser = {
        token,
        username: savedUser.username,
        id: savedUser._id.valueOf(),
        icon: savedUser.icon,
        likes: savedUser.likes,
        follow: savedUser.follows,
        tweets: savedUser.tweets,
        info: savedUser.info,
      };

      res.json(newUser);
    } else {
      res.status(400).json({ error: 'password too short' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'invalid input' });
  }
});

usersRouter.get('/profile', async (req, res) => {
  // console.log('profile route');
  if (req.googleUser) {
    // console.log(req.googleUser);

    const googleAccount = await User.findOne({ googleId: req.googleUser.id });
    // console.log('profile route googleAccount: ', googleAccount);
    if (googleAccount) {
      const userForToken = {
        username: googleAccount.username,
        id: googleAccount._id.valueOf(),
      };
      const token = jwb.sign(userForToken, process.env.SECRET);

      res.status(200).json({
        token,
        username: googleAccount.username,
        name: googleAccount.name,
        id: googleAccount._id.valueOf(),
        icon: googleAccount.icon,
        likes: googleAccount.likes,
        follows: googleAccount.follows,
        tweets: googleAccount.tweets,
      });
      // console.log('before return ');
      return;
    }
    // console.log('before creating new user');
    const newBioText = await axios.get(
      'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
    );
    const bioText = newBioText.data[0];
    //get random generated image
    const newCover = await axios.get(`https://picsum.photos/600/200`);
    const coverUrl = newCover.request.res.responseUrl;
    const following = Math.floor(getRandomArbitrary(2, 15));
    const followers = Math.floor(getRandomArbitrary(2, 15));
    // const randomIcon = await axios.get('https://picsum.photos/200/200');
    // const icon = randomIcon.request.res.responseUrl;

    // const googleIcon = req.googleUser.photos[0].value;

    // console.log('google icon: ', googleIcon);
    // const userIcon = await axios({
    //   method: 'get',
    //   url: googleIcon,
    //   responseType: 'stream',
    // });
    // // console.log('response data: ', userIcon.data);
    // userIcon.originalname = req.googleUser.displayName;
    // const iconURL = await uploadImageToGoogle(userIcon);
    // console.log(iconURL)

    const googleIcon = await uploadGoogleIcon(req.googleUser);
    console.log('icon: ', googleIcon);

    const userToSave = new User({
      username: req.googleUser.displayName.slice(0, 25),
      // icon: req.googleUser.photos[0].value,
      icon: googleIcon,
      googleId: req.googleUser.id,
      info: {
        cover: coverUrl,
        bio: bioText,
        following,
        followers,
      },
    });

    // console.log(userToSave);

    const savedUser = await userToSave.save();

    const userForToken = {
      username: savedUser.username,
      id: savedUser._id.valueOf(),
    };

    // const tokenDuration = 60;

    const token = jwb.sign(userForToken, process.env.SECRET, {
      // expiresIn: tokenDuration,
    });

    const newUser = {
      token,
      username: savedUser.username,
      id: savedUser._id.valueOf(),
      icon: savedUser.icon,
      likes: savedUser.likes,
      follow: savedUser.follows,
      tweets: savedUser.tweets,
      info: savedUser.info,
    };

    // console.log('user sent from /profile: ', newUser);

    res.json(newUser);
    return;
  } else {
    console.log('no user');
    res.status(400);
    return;
  }
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const retrievedUser = await User.findById(req.params.id);
    if (!retrievedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = {
      username: retrievedUser.username,
      id: retrievedUser._id.valueOf(),
      icon: retrievedUser.icon,
      likes: retrievedUser.likes,
      follow: retrievedUser.follows,
      tweets: retrievedUser.tweets,
      info: retrievedUser.info,
    };
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

usersRouter.delete('/delete/:id', async (req, res) => {
  try {
    // Find the user by ID and delete
    const dbUser = await User.findByIdAndDelete(req.params.id);

    // Check if the user was found and deleted
    if (!dbUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete tweets associated with the user
    await Tweet.deleteMany({ user: dbUser._id });

    // Log deleted user
    console.log('Deleted user:', dbUser);

    res
      .status(200)
      .json({ message: 'User and associated tweets deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default usersRouter;
