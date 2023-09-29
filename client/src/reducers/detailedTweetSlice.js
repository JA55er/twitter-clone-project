import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailedTweet: {},
};

const detailedTweetSlice = createSlice({
  name: 'detailedTweet',
  initialState,
  reducers: {
    setDetailedTweet: (state, action) => {
      state.detailedTweet = action.payload;
    },
    addComment: (state, action) => {
      state.detailedTweet.tweets = state.detailedTweet.tweets.concat(
        action.payload
      );
      state.detailedTweet.stats.comments++;
    },
    likeTweetAction: (state, action) => {
      state.detailedTweet.stats.likes = action.payload
    },
    dislikeTweetAction: (state, action) => {},
    likeCommentAction: (state, action) => {
      state.detailedTweet.tweets.map(tweet => {
        if (tweet._id === action.payload.id) {
          return tweet.stats.likes = action.payload.likes
        } else {
          return tweet
        }
      })
    },
    dislikeCommentAction: (state, action) => {},
  },
});

export const {
  setDetailedTweet,
  addComment,
  likeTweetAction,
  dislikeTweetAction,
  likeCommentAction,
  dislikeCommentAction,
} = detailedTweetSlice.actions;

export default detailedTweetSlice.reducer;
