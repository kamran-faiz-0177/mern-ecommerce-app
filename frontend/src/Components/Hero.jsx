import React from 'react';

const Hero = () => {
  return (
    <div className="mt-40 border border-gray-400 w-[80%] mx-auto flex flex-col md:flex-row items-center justify-around">
      <div className="w-full md:w-1/2 text-center text-gray-600 font-semibold p-4">
        <p className="text-xl">----- OUR BEST SELLERS</p>
        <h1 className="text-5xl">Latest Arrivals</h1>
        <p className="text-xl">SHOP NOW ---</p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          src="./hero_img.png"
          alt="Hero"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
