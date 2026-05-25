import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg text-center">
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-indigo-600 mb-4 animate-bounce">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            ⬅ Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
