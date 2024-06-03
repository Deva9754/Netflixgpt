import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/Movieslice";
import { useEffect, useCallback } from "react";

const useMovieVideos = (movieid) => {
  const dispatch = useDispatch();
  const getmovievideos = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[1] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieid]);

  useEffect(() => {
    getmovievideos();
  }, [getmovievideos]);
};

export default useMovieVideos;
