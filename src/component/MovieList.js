import React from "react";
import MovieCard from "./MovieCard";
import ShimmerMovies from "../shimmer/ShimmerMovie";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>


      <div className=" flex overflow-x-scroll ">
        <div className="flex">
          {movies ? (
          movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))
        ):(
            <ShimmerMovies/>
        )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
