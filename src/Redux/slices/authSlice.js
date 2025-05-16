import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      //login
    },
    logOut: (state) => {
      //logout
    },
  },
})

export const { logIn, logOut, } = authSlice.actions
export default authSlice.reducer