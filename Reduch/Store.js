import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";

export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            todos: todosReducer,
        },
    }
);