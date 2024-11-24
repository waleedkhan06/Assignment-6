"use client"
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
  mobileName: string;
  mobileRole : string;

}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Nduku",
      role: "Software Developer",
      image: "/avatar3.png",
      mobileName: "Wade Warren",
      mobileRole : "Position, Company name",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 2,
      name: "Erick Kipkemboi", 
      role: "Scrum Master",
      image: "/avatar1.png",
      mobileName: "Erick Kipkemboi",
      mobileRole : "Scrum Master",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 3,
      name: "Stephen Kerubo",
      role: "UX/UI Designer",
      image: "/avatar6.png",
      mobileName: "Stephen Kerubo",
      mobileRole : "UX/UI Designer",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 4,
      name: "Joseph Munyambu",
      role: "Web Designer",
      image: "/avatar4.png",
      mobileName: "Joseph Munyambu",
      mobileRole : "Web Designer",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 5,
      name: "Joseph Ngumbau",
      role: "President of sales",
      image: "/avatar5.png",
      mobileName: "Joseph Ngumbau",
      mobileRole : "President of sales",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenType = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setVisibleCount(1); 
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsMobile(true);
        setVisibleCount(3); 
      } else {
        setIsMobile(true);
        setVisibleCount(3); 
      }
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);
    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length
        ? 0
        : prevIndex + visibleCount
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleCount < 0
        ? testimonials.length - visibleCount
        : prevIndex - visibleCount
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="w-full bg-gray-50 py-16 px-4 lg:px-24 ">
      <div className="text-center mb-12">
        <h2 className="lg:text-4xl text-black font-bold mb-2">
          <span className="block text-2xl sm:hidden">What Our Students Say</span>
          <span className="hidden sm:block">Customer Testimonials</span>
        </h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <div className="relative">
        
        <div className="flex gap-6 justify-center">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md p-6 max-w-sm border border-black"
            >
          
              <div className="flex mb-6">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-black text-2xl font-bold">
                    &#9733;
                  </span>
                ))}
              </div>

        
              <p className="text-black  mb-6 text-lg">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>

            
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold roboto text-black">
                    {isMobile && testimonial.mobileName
                      ? testimonial.mobileName
                      : testimonial.name}
                  </h4>
                  <p className="text-sm text-black">
                    {isMobile && testimonial.mobileRole
                      ? testimonial.mobileRole
                      : testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex items-center justify-between mt-8">
         
          <div className="flex space-x-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === Math.floor(currentIndex / visibleCount)
                    ? "bg-gray-800"
                    : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

         
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-black hover:bg-gray-200"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border text-black  border-black hover:bg-gray-200"
            >
              <FaArrowRight size={20}  />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;