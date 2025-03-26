import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [
    {
      id: 1,
      name: "X",
      author: "Lukman",
      price: 10,
      quantity: 15,
    },
    {
      id: 2,
      name: "Y",
      author: "Anis",
      price: 20,
      quantity: 10,
    },
  ],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.book = state.book.filter((book) => book.id !== id);
    },
  },
});
export const {deleteBook} = bookSlice.actions;
export default bookSlice.reducer;
