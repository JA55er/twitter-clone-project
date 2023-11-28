import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import tweetsListReducer from './reducers/tweetListSlice';
import scrollReducer from './reducers/scrollSlice';
import userReducer from './reducers/userSlice';
import detailedTweetReducer from './reducers/detailedTweetSlice';
import newTweetsReducer from './reducers/newTweetsSlice';
import pageReducer from './reducers/pageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tweetsList: tweetsListReducer,
    scroll: scrollReducer,
    user: userReducer,
    detailedTweet: detailedTweetReducer,
    newTweetsList: newTweetsReducer,
    page: pageReducer,
  },
});
