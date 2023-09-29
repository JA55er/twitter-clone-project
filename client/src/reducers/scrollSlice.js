import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setScroll} = scrollSlice.actions

export default scrollSlice.reducer