import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minlength: 3},
  passwordHash: { type: String, required: true },
  // name: {type: String, required: true, minlength: 3,},
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet"
  }],
  icon: String,
});

userSchema.plugin(uniqueValidator)


export default mongoose.model('User', userSchema)

