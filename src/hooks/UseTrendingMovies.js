import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrendingmovies } from "../utils/Movieslice";
import { useEffect } from "react";

const UseTrendingMovie = () => {
  const dispatch = useDispatch();

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addTrendingmovies(json.results));
  };
  useEffect(() => {
    getTrending();
  }, []);
};

export default UseTrendingMovie;
