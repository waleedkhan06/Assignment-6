'use client'
import { useState, useEffect } from "react"

// data in a array 
const categories = [
  { id: 1, image: "/icon1.png", title: "Design & Development", courses: "50+ Courses Available" },
  { id: 2, image: "/icon2.png", title: "Marketing", courses: "50+ Courses Available" },
  { id: 3, image: "/icon3.png", title: "Development", courses: "50+ Courses Available" },
  { id: 4, image: "/icon4.png", title: "Communication", courses: "50+ Courses Available" },
  { id: 5, image: "/icon5.png", title: "Digital Marketing", courses: "50+ Courses Available" },
  { id: 6, image: "/icon6.png", title: "Self Development", courses: "50+ Courses Available" },
  { id: 7, image: "/icon7.png", title: "Business", courses: "50+ Courses Available" },
  { id: 8, image: "/icon8.png", title: "Finance", courses: "50+ Courses Available" },
  { id: 9, image: "/icon9.png", title: "Consulting", courses: "50+ Courses Available" },
]

export default function Categories() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
   
    checkMobile()
    

    window.addEventListener('resize', checkMobile)
    
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

 
  const visibleCategories = showAll || !(isMobile) ? categories : categories.slice(0, 3)

  return (
    <section className="bg-white py-12 px-4">

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 px-4 sm:px-8">
       Explore Courses by Category
      </h2>
      
      
      <p className="text-sm sm:text-lg text-black text-center mb-12 px-4 sm:px-8">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      
 
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCategories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
               
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
            
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black">
                      {category.courses}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

     
      <div className="text-center mt-8">
    
        <div className="hidden lg:block">
          <button className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-gray-100">
            View All Courses
          </button>
        </div>
        
     
        <div className="lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-2 py-3 border border-black bg-white text-black rounded-md hover:bg-gray-100"
          >
            {showAll ? "View Less Courses" : "View All Courses"}
          </button>
        </div>
      </div>
    </section>
  )
}
