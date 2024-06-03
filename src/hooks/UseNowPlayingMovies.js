import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addnowplayingmovies } from "../utils/Movieslice";
import { useEffect, useCallback } from "react";

const UseNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const getNowPlaying = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json?.results);
    // console.log(JSON.stringify(json.results, null, 2));
    dispatch(addnowplayingmovies(json.results));
  }, [dispatch]);
  useEffect(() => {
    getNowPlaying();
  }, [getNowPlaying]);
};

export default UseNowPlayingMovie;
