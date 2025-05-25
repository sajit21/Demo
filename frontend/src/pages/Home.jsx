import React from 'react';

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Browse by Department Button */}
      <div className="bg-blue-500 text-white font-semibold text-center py-3 cursor-pointer rounded-b-md">
        Browse By Department ▼
      </div>

      {/* Hero Section */}
      <div className="relative mt-4">
        <img
          src="/your-banner-image.jpg" // Replace this with your image path or import
          alt="Browse Categories"
          className="w-full h-[500px] object-cover rounded-md"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 bg-black bg-opacity-30">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            Browse our <br /> categories
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-yellow-400">
            Browse our categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
