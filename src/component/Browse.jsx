import UseNowPlayingMovie from "../hooks/UseNowPlayingMovies";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import UseTrendingMovie from "../hooks/UseTrendingMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import UseUpcomingMovies from "../hooks/UseUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  UseNowPlayingMovie(); 
  UseTrendingMovie(); 
  UseTopRatedMovies();
  UseUpcomingMovies();


  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
