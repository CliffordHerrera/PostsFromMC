import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  user: null,
  users: [],
  status: "idle",
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users = action.payload
      console.log(state.users)
    },
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
})

export const { logIn, logOut, register } = authSlice.actions
export const selectUser = (state) => state.auth.user
export default authSlice.reducer