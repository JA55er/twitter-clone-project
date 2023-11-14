import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newTweets: [],
};

export const newTweetsSlice = createSlice({
  name: 'newTweets',
  initialState,
  reducers: {
    getNewTweets: (state, action) => {
      console.log('action payload: ', action.payload);
      const newTweet = action.payload;
      state.newTweets = [newTweet, ...state.newTweets];
    },
    clearNewTweets: (state, action) => {
      state.newTweets = [];
    },
  },
});

export const { getNewTweets, clearNewTweets } = newTweetsSlice.actions;

export default newTweetsSlice.reducer;
