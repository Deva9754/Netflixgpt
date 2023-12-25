import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = GptSlice.actions;

export default GptSlice.reducer;