import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.mjs';
import bcrypt from 'bcrypt';
import jwb from 'jsonwebtoken';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
  console.log(req.body);
  const body = req.body;
  const user = await User.findOne({ username: body.username });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!user || !passwordCorrect) {
    return res.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id.valueOf(),
  };

  const token = jwb.sign(userForToken, process.env.SECRET);

  res.status(200).json({
    token,
    username: user.username,
    name: user.name,
    id: user._id.valueOf(),
    icon: user.icon
  });
});

loginRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});
loginRouter.post('/authreq', async (req, res) => {
  const token = req.token;
  const user = req.user;
  console.log(user);
  res.send(token);
});

export default loginRouter;