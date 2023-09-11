import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  comment_text: {type: String, required: true, minlength: 1},
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

export default mongoose.model("Comment", commentSchema)