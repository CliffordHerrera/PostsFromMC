import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await responce.json();
    return data;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        userData: [],
        userDetail: [],
        status: "idle",
    },
    reducers: {
        setUserDetail: (state, action) => {
            state.userDetail = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userData = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default usersSlice.reducer;
export const { setUserDetail } = usersSlice.actions;