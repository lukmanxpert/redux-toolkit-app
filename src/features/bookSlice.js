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
    updateBook: (state, action) => {
      const { id, name, author, price, quantity } = action.payload;
      const existingBook = state.book.find((book) => book.id == id);
      console.log("Found Book:", existingBook);
      if (existingBook) {
        existingBook.name = name;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      } else {
        console.log(`No book found with ID: ${id}`);
      }
    },
    addBook: (state, action) => {
      console.log(state.book);
      state.book.push(action.payload);
    },
  },
});
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
