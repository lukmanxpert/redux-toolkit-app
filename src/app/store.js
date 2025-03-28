import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import postReducer from "../features/posts/postSlice"
const store = configureStore({
  reducer: {
    booksR: bookReducer,
    postR: postReducer
  }
});
export default store;
