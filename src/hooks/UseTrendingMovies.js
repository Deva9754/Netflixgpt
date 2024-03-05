import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrendingmovies } from "../utils/Movieslice";
import { useEffect,useCallback } from "react";

const UseTrendingMovie = () => {
  const dispatch = useDispatch();

  const getTrending =useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addTrendingmovies(json.results));
  },[dispatch]);
  useEffect(() => {
    getTrending();
  }, [getTrending]);
};

export default UseTrendingMovie;
