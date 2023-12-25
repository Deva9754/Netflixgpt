import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  // const movies = useSelector((store)=> store?.movies);
  const movies = useSelector((store) => store?.movies);
  console.log(movies);
  return (
    <div className=" bg-black ">
       <div className="mt-0 md:-mt-52 pl-0 md:pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowplayingmovies} />
        <MovieList title={"Upcoming"} movies={movies?.Upcomingmovies} />
        <MovieList title={"Trending"} movies={movies?.Trendingmovies} />
        <MovieList title={"TopRated"} movies={movies?.TopRatedmovies} />
        
        <MovieList title={"Horror"} movies={movies?.nowplayingmovies} />

        
      </div>
    </div>
  );
};

export default SecondaryContainer;
