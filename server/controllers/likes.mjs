import express from 'express';
import User from '../models/user.mjs';
import Tweet from '../models/tweet.mjs';

const likesRouter = express.Router();

likesRouter.post('/like', async (req, res) => {
  const user = req.user;

  if (user) {
    try {
      // res.sendStatus(200);
      // const dataBaseUser = await User.findById(user._id);
      const likes = user.likes;
      // console.log('tweet id: ', req.body.id);
      // console.log('list of initial likes: ', likes);
      if (likes.includes(req.body.id)) {
        // console.log('disliking');
        // console.log('first like: ', likes[0]);
        const filteredLikes = likes.filter(
          (likes) => likes.valueOf() !== req.body.id
        );
        await User.findByIdAndUpdate(
          user._id,
          {
            likes: filteredLikes,
          },
          { new: true }
        );
        // console.log('aaaaaaaa');
        const dislikedTweet = await Tweet.findByIdAndUpdate(
          req.body.id,
          { $inc: { 'stats.likes': -1 } },
          { new: true }
        );
        // console.log('aa', dislikedTweet);
        res.sendStatus(200);
      } else {
        // console.log('liking');
        const addedLikes = likes.concat(req.body.id);
        await User.findByIdAndUpdate(
          user._id,
          {
            likes: addedLikes,
          },
          { new: true }
        );
        // console.log('aaaaaaaa');
        const likedTweet = await Tweet.findByIdAndUpdate(
          req.body.id,
          { $inc: { 'stats.likes': 1 } },
          { new: true }
        );
        // console.log(likedTweet);
        res.sendStatus(200);
      }
    } catch (error) {
      res.send(error);
    }
  }
});
// likesRouter.post('/like', async (req, res) => {
//   const user = req.user;

//   if (user) {
//     try {
//       // res.sendStatus(200);
//       const dataBaseUser = await User.findById(user._id);
//       const likes = dataBaseUser.likes;
//       console.log('tweet id: ', req.body.id);
//       console.log('list of initial likes: ', likes);
//       if (likes.includes(req.body.id)) {
//         console.log('first like: ', likes[0]);
//         const filteredLikes = likes.filter(
//           (likes) => likes.valueOf() !== req.body.id
//         );
//         const updatedUser = await User.findByIdAndUpdate(user._id, {
//           likes: filteredLikes,
//         });
//         console.log('filtered likes: ', filteredLikes);
//         console.log('updated user with filtered likes: ', updatedUser);
//       } else {
//         const addedLikes = likes.concat(req.body.id);
//         const updatedUser = await User.findByIdAndUpdate(user._id, {
//           likes: addedLikes,
//         });
//         console.log('updated user with added likes: ', updatedUser);
//         res.sendStatus(200);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   }
// });

export default likesRouter;
