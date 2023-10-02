import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserAction: (state, action) => {
      state.user = action.payload
    },
    logoutUserAction: (state) => {
      state.user = null
    },
    userLikeTweetAction: (state, action) => {
      state.user.likes = state.user.likes.concat(action.payload)
    },
    userDislikeTweetAction: (state, action) => {
      state.user.likes = state.user.likes.filter(like => like !== action.payload)
    },
    userCommentAction: (state, action) => {

    },
    userCreateTweetAction: (state, action) => {
      state.user.tweets = state.user.tweets.concat(action.payload)
    }
  }
})

export const { saveUserAction, logoutUserAction, userLikeTweetAction, userDislikeTweetAction, userCreateTweetAction} = userSlice.actions

export default userSlice.reducer