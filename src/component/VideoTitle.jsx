const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <p className="text-xl font-bold md:text-3xl">{title}</p>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="my-2 md:m-0">
        <button
          className="md:p-4 bg-white text-black px-2md:px-12 md:text-xl py-1
          md:py-4 
          hover:bg-opacity-80 rounded-lg"
        >
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 p-4 bg-gray-500 text-white px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
