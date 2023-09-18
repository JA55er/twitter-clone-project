import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
  text: { type: String, required: true },
  attachment: String,
  stats: {
    comments: Number,
    retweets: Number,
    likes: Number,
    views: Number,
  },
  // comments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Comment"
  // }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet',
    },
  ],
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  },
});

export default mongoose.model('Tweet', tweetSchema);
// import mongoose  from "mongoose";

// const tweetSchema = new mongoose.Schema({
//   text: {type: String, required: true},
//   attachment: String,
//   stats: {
//     comments: Number,
//     retweets: Number,
//     likes: Number,
//     views: Number
//   },
//   comments: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Comment"
//   }],
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// });

// export default mongoose.model('Tweet', tweetSchema);
