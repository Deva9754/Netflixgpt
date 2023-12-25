import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MainContainerShimmer from "../shimmer/maincontainershimmer";
import React from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);


  if (!movies || !movies?.length) return <MainContainerShimmer />;

  const { original_title, overview, id } = movies[0];

  return (
    <div className="pt-[40%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;

