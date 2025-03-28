import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = result.data;
  return data;
});
const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    post: [],
    isError: null,
  },
  extraReducers: (build) => {
    build.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.isError = null;
    });
    build.addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.post = [];
        state.isError = action.error.message;
    });
  },
});
export default postSlice.reducer;
