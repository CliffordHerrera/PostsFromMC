import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import usersReducer from "./usersSlice";
import postsReducer from "./postSlice";

export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            users: usersReducer,
            posts: postsReducer,
        },
    }
);