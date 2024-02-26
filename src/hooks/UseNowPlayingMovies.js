import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addnowplayingmovies } from "../utils/Movieslice";
import { useEffect } from "react";

const UseNowPlayingMovie = () => {
  const dispatch = useDispatch();
  

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
     console.log(json?.results);
    dispatch(addnowplayingmovies(json.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default UseNowPlayingMovie;
