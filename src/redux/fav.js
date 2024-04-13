import { createSlice } from "@reduxjs/toolkit";

const initialState = { favorite: [], favCount: 0 };

const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // Reducer for adding a favorite
    addFavorite: (state, action) => {
      state.favorite?.push(action.payload);
      state.favCount = state.favorite?.length;
    },
    // Reducer for removing a favorite
    removeFavorite: (state, action) => {
      state.favorite = state.favorite?.filter(
        (movie) => movie.id !== action.payload
      );
      state.favCount = state.favorite?.length;
    },
  },
});

export const { addFavorite, removeFavorite } = favSlice.actions;
export default favSlice.reducer;
