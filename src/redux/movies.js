import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("movie/getMovie", async () => {
  const res = await axios.get("https://api.sampleapis.com/movies/animation");
  return res.data;
});

export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (id) => {
    const response = await axios.get(
      `https://api.sampleapis.com/movies/animation/${id}`
    );
    return response.data;
  }
);
// export const addMovie = createAsyncThunk("movie/addMovie", async (movie) => {
//   const response = await axios.post("http://localhost:3000/movies", movie);
//   return response.data;
// });
// export const removeMovie = createAsyncThunk("movie/removeMovie", async (id) => {
//   const response = await axios.delete(`http://localhost:3000/movies/${id}`);
//   return response.data;
// });

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], singleMovie: {} },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.singleMovie = action.payload;
    });
    // builder.addCase(addMovie.fulfilled, (state, action) => {
    //   state.movies.push(action.payload);
    // });
    // builder.addCase(removeMovie.fulfilled, (state, action) => {
    //   state.movies = state.favorite.filter(
    //     (movie) => movie.id !== action.payload
    //   );
    // });
  },
});

export default movieSlice.reducer;
