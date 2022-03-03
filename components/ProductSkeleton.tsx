import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4 my-4 bg-gray-100 rounded-lg shadow-md md:p-5 lg:p-6">
      <div className="flex flex-col items-center h-full gap-4 py-4 animate-pulse ">
        <div className="h-48 bg-gray-300 rounded-lg w-36 "></div>
        <div className="flex flex-col space-y-3">
          <div className="h-6 bg-gray-300 rounded-md w-36 "></div>
          <div className="self-end w-24 h-6 bg-gray-300 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};
