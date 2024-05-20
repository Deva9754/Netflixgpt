import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../component/MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white font-bold bg-opacity-50">
      {movieNames.length &&
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
    </div>
  );
};

export default GptMovieSuggestion;
