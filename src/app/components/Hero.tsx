"use client"
import React from 'react';


const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between py-12 px-4 
    sm:px-6 lg:px-8">
 
      <div className="flex flex-col md:flex-row justify-between items-center
       gap-8">
       
        <div className="space-y-6 max-w-xl mx-auto md:mx-0 text-center 
        md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn new skills online with ease
          </h1>
          <p className="text-lg text-gray-600">
            Discover a wide range of courses covering a variety of subjects, 
            taught by expert instructors.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start
           gap-3 sm:gap-4">
            <button className="bg-black text-white px-4 sm:px-6 py-2 
            sm:py-3 rounded-md hover:bg-gray-800 text-sm sm:text-lg">
              Start learning now
            </button>
            <button className="border border-black px-4 sm:px-6 py-2 sm:py-3
             rounded-md hover:bg-gray-50 text-sm sm:text-lg">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="flex justify-center md:flex-shrink-0 w-full max-w-xs 
        md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="bg-[#F5F5F0] rounded-lg w-full h-full flex 
          justify-center items-center">
            <img 
               src="/heroimage.png" 
              alt="image" 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-12">
        <img 
          src="/logo2.png" 
          alt="Logo" 
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;



       

