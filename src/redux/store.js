import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./fav";
import movieReducer from "./movies";
const store = configureStore({
  reducer: {
    movie: movieReducer,
    favorite: favoriteReducer,
  },
});
export default store;
