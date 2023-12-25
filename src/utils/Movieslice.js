import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: [],
    trailerVideo: [],
    Trending: [],
    TopRated: [],
    Upcoming: [],
    Horror: [],
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addTrendingmovies: (state, action) => {
      state.Trendingmovies = action.payload;
    },
    addTopRatedmovies: (state, action) => {
      state.TopRatedmovies = action.payload;
    },
    addUpcomingmovies: (state, action) => {
        state.Upcomingmovies = action.payload;
      },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addnowplayingmovies,
  addTrailerVideo,
  addTrendingmovies,
  addTopRatedmovies,
  addUpcomingmovies,
} = movieSlice.actions;
export default movieSlice.reducer;
