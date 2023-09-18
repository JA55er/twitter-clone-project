import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  commentText: { type: String, required: true, minlength: 1 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
  },
});

export default mongoose.model('Comment', commentSchema);
