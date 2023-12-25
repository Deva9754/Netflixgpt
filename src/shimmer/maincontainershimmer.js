import React from "react";

const MainContainerShimmer = () => {
  return (
    <div className="pt-[10%] bg-black opacity-80">
      <div className="py-[20%]">
        <p className="text-4xl text-white text-center hover:animate-spin ">
          Please wait Loading....🔃
        </p>
      </div>
    </div>
  );
};

export default MainContainerShimmer;