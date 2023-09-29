import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import tweetsListReducer from './reducers/tweetListSlice';
import scrollReducer from './reducers/scrollSlice';
import userReducer from './reducers/userSlice';
import detailedTweetReducer from './reducers/detailedTweetSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tweetsList: tweetsListReducer,
    scroll: scrollReducer,
    user: userReducer,
    detailedTweet: detailedTweetReducer,
  },
});
