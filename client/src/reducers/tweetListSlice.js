import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweets: [],
};

export const tweetsListSlice = createSlice({
  name: 'tweetsList',
  initialState,
  reducers: {
    getTweetsFromServer: (state, action) => {
      state.tweets = action.payload;
    },
    addPosted: (state, action) => {
      const newPost = action.payload;
      state.tweets = [newPost, ...state.tweets];
    },
    updateDetailedInList: (state, action) => {
      const newState = state.tweets.map((tweet) => {
        if (tweet._id === action.payload._id) {
          return action.payload;
        } else {
          return tweet;
        }
      });
      state.tweets = [...newState];
    },
    likePostFromList: (state, action) => {
      console.log(action);
      const newState = state.tweets.map((tweet) => {
        if (tweet._id === action.payload.id) {
          console.log('tweet id equal');
          return (tweet.stats.likes = action.payload.likes);
        } else {
          return tweet;
        }
      });
    },
    addNewTweets: (state, action) => {
      state.tweets = [...action.payload, ...state.tweets];
    },
    removeTweetFromList: (state, action) => {
      state.tweets = state.tweets.filter((tweet) => {
        return tweet._id !== action.payload;
      });
    },
  },
});

export const {
  getTweetsFromServer,
  addPosted,
  updateDetailedInList,
  likePostFromList,
  addNewTweets,
  removeTweetFromList,
} = tweetsListSlice.actions;

export default tweetsListSlice.reducer;
