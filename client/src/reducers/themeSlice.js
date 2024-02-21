import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setInitialTheme: (state, action) => {
      state.theme = action.payload
    }
  },
});


export const { changeTheme, setInitialTheme} = themeSlice.actions

export default themeSlice.reducer