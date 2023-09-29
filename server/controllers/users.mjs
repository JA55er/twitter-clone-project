import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import User from '../models/user.mjs';
import bcrypt from 'bcrypt';
import jwb from 'jsonwebtoken';

const usersRouter = express.Router();

usersRouter.post('/newuser', async (req, res) => {
  const body = req.body;
  const saltRounds = 10;
  try {
    if (body.password.length >= 3) {
      const passwordHash = await bcrypt.hash(body.password, saltRounds);
      const randomIcon = await axios.get('https://picsum.photos/40/40');
      const icon = randomIcon.request.res.responseUrl;
      const user = new User({
        username: body.username,
        passwordHash,
        // name: body.name,
        icon,
      });

      const savedUser = await user.save();

      const userForToken = {
        username: savedUser.username,
        id: savedUser._id.valueOf(),
      };

      const token = jwb.sign(userForToken, process.env.SECRET);

      const newUser = {
        token,
        comments: savedUser.comments,
        follow: savedUser.follows,
        icon: savedUser.icon,
        likes: savedUser.likes,
        tweets: savedUser.tweets,
        username: savedUser.username,
        id: savedUser._id.valueOf(),
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

usersRouter.get('/', async (req, res) => {
  const user = await User.findOne({ username: 'waba' });
  console.log(user._id.valueOf());
  res.json(user);
});

export default usersRouter;
