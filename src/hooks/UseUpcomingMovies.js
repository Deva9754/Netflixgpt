import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingmovies } from "../utils/Movieslice";
import { useCallback, useEffect } from "react";

const UseUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming =useCallback( async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addUpcomingmovies(json.results));
  },[dispatch]);
  useEffect(() => {
    getUpcoming();
  }, [getUpcoming]);
};

export default UseUpcomingMovies;
