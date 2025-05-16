import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await responce.json();
    return data;
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postData: [],
        status: "idle",
    },
    reducers: {
        refresh: (state, action) => {
            state.postData = action.payload;
        },

        updateBody: (state, action) => {
            const { id, body } = action.payload;
            const post = state.postData.find((post) => post.id === id);
            if (post) {
                post.body = body;
            }
        },

        deletePost: (state, action) => {
            const id = action.payload;
            state.postData = state.postData.filter(post => post.id !== id);
            localStorage.setItem("posts", JSON.stringify(state.postData));
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            const local = localStorage.getItem("posts");
            state.postData = local ? JSON.parse(local) : action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = "failed";
        });
    },
});

export default postsSlice.reducer;
export const { deletePost, updateBody, refresh } = postsSlice.actions;
//    postDetail: [],

/* setPostDetail: (state, action) => {
        state.postDetail = action.payload;
    },*/