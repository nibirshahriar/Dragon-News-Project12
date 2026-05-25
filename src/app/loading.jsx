import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <span className="loading loading-dots loading-xl text-pink-600"></span>

      <p className="text-gray-500 font-medium">Loading news...</p>
    </div>
  );
};

export default LoadingPage;
