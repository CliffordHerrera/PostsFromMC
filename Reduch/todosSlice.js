import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { title } from "framer-motion/client";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (todoText) => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(
            {
                title: todoText,
                completed: false,
                userId: 1,
            }
        ),
        headers: 
        {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    
    
    const data = await responce.json();
    return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    });
    return id;
    
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(
            {
                completed: true,
            }
        ),
        headers: 
        {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await responce.json();
    return data;
});

const todosSlice = createSlice(
    {
        name: 'todos',
        initialState: 
        {
            todos: [],
            myList: [],
            status: 'idle',
            error: null,
        },
        reducers: {},
        extraReducers: (builder) => 
        {
            builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos.push(action.payload);
                state.myList.push(
                    {
                        id: Date.now(),
                        text: action.payload.title,
                    }
                );
                console.log("✅ Payload:", action.payload);

            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.todos = action.error.message;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);
            });
        },
        
    },
);

export default todosSlice.reducer;