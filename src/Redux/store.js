import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "./counterSlice";
import authReducer from "./slices/authSlice";
import postsReducer from "./slices/postSlice";

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            posts: postsReducer,
        },
    }
);