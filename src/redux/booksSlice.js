import { createSlice } from "@reduxjs/toolkit";
import { Books } from '../utils/mockData'; 

const bookSlice = createSlice({
  name: "books",
  initialState: Books, // Use Books as initial state
  reducers: {
    setBooks: (state, action) => {
      return action.payload; // Replace the entire book list
    },
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        categories: Array.isArray(action.payload.categories) && action.payload.categories.length > 0
          ? action.payload.categories
          : ["Unknown"], // Ensure it's always an array
      };
      state.unshift(newBook); // Add the new book at the beginning
    },
  },
});

export const { setBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
