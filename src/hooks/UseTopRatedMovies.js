import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedmovies } from "../utils/Movieslice";
import { useEffect } from "react";

const UseTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addTopRatedmovies(json.results));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default UseTopRatedMovies;
