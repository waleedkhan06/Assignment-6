"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CourseProps {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
  rating: string;
}

const CourseCard: React.FC<CourseProps> = ({ title, description, image, price,
   category, rating }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border
     border-gray-200">
      <div className="relative">
        <img
          src={image || "/api/placeholder/400/320"}
          alt={title}
          className="w-[380px] h-[300px] sm:w-[380px] sm:h-[300px] md:w-[416px] md:h-[300px]
           lg:w-[416px] lg:h-[300px] object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-black">{category}</span>
          <div className="flex items-center">
            <span className="text-gray-300 text-2x1 font-bold">★</span>
            <span className="ml-1 text-sm text-black">{rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-black text-base mb-2">{title}</h3>
        <p className="text-sm text-black mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <button className="px-1 py-1 border border-black bg-gray-50
           text-black rounded-md hover:bg-gray-100">
            Enroll Now
          </button>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      title: "UX/UI Design 201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros",
      image: "/course.png",
      price: "400",
      category: "Design",
      rating: "5.0",
    },
    {
      title: "Introduction to Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros",
      image: "/course2.png",
      price: "400",
      category: "Programming",
      rating: "5.0",
    },
    {
      title: "Data Analysis for Beginners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros",
      image: "/course3.png",
      price: "400",
      category: "Business",
      rating: "5.0",
    },
    {
      title: "Art and Specialization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros",
      image: "/course4.png",
      price: "400",
      category: "Art",
      rating: "5.0",
    },
    {
      title: "Rule of Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros",
      image: "/course5.png",
      price: "400",
      category: "Law",
      rating: "5.0",
    },
    {
      title: "Introduction to webflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros.",
      image: "/course6.png",
      price: "400",
      category: "Tech",
      rating: "5.0",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

   
    handleResize();

    window.addEventListener("resize", handleResize);

  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCourses = showAll || !isMobile ? courses : courses.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-black mb-8">Courses</h1>
        <p className="text-black mb-8">Your ultimate guide to learning</p>


        <div className="flex justify-center gap-8 mb-8">
          <button className="text-black font-medium hover:underline">Popular</button>
          <button className="text-black hover:underline">Recommended</button>
          <button className="text-black hover:underline">Best Price</button>
        </div>
      </div>

      {/* Course Grid for desktop tablet and mobile*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-8">
      
        <div className="block lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 border-2 border-black bg-white text-black rounded-md hover:bg-gray-100"
          >
            {showAll ? "View Less" : "View All Courses"}
          </button>
        </div>

       
        <div className="hidden lg:block">
          <button className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-gray-100">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;



