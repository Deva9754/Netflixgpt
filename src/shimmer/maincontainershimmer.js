import React from "react";

const MainContainerShimmer = () => {
  return (
    <div className="pt-[10%] bg-black opacity-80">
      <div className="py-[20%]">
        {/* <p className="text-4xl text-white text-center hover:animate-spin ">
          Please wait Loading....🔃
        </p> */}
        <img
          src="https://i.pinimg.com/originals/34/12/0d/34120d6eac6ceb48cabf121f84a9e3e1.gif"
          alt="page-loader"
        />
      </div>
    </div>
  );
};

export default MainContainerShimmer;
