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
        postDetail: [],
        status: "idle",
    },
    reducers: {
        setPostDetail: (state, action) => {
            state.postDetail = action.payload;
        },

        updateBody: (state, action) => {
            const { id, body } = action.payload;
            const post = state.postData.find((post) => post.id === id);
            if (post) {
                post.body = body;
            }
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
export const {setPostDetail, updateBody} = postsSlice.actions;