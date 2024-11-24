"use client"
import { useState, useEffect } from "react";


export default function TeamSection() {
  const teamMembers = [
    { name: "James Ndaku", role: "Marketing Content", image: "/avatar1.png" },
    { name: "Joseph Munambu", role: "Nursing Aid", image: "/avatar2.png" },
    { name: "Joseph Ngunyi", role: "Media", image: "/avatar3.png" },
    { name: "Erick Kipkemboi", role: "Web Designer", image: "/avatar4.png" },
    { name: "Stephen Kanubo", role: "President", image: "/avatar5.png" },
    { name: "John Laboo", role: "Dog Trainer", image: "/avatar6.png" },
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

  const visibleMembers = showAll || !isMobile ? teamMembers : teamMembers.slice(0, 3);

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
 
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 font-roboto text-black">Our Team</h2>
        <p className="text-black  text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleMembers.map((member, index) => (
          <div key={index} className="text-center space-y-4">
            <img
              src={member.image}
              alt={member.name}
              className=" mx-auto object-cover w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px]"
            />
            <h3 className="text-lg font-bold text-black">{member.name}</h3>
            <p className="text-sm text-black">{member.role}</p>
            <div className="flex justify-center space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="linkedin" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/Dribble.png" alt="dribble" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-6 sm:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-gray-100"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
}
