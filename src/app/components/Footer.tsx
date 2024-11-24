"use client"
import React from 'react';


const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
      
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
        
          <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-black text-xl font-bold font-roboto">
              Subscribe to our newsletter
            </h3>
            <p className="text-black text-sm mt-2 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

       
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
           
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border bg-white border-black rounded-md flex-grow placeholder-gray-600"
              />
              <button className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-gray-100">
                Subscribe
              </button>
            </div>
         
            <p className="text-sm text-black text-center lg:text-left 
                 xl:text-right font-roboto">
                 By subscribing, you agree to our&nbsp;
                 <a href="#" className="underline hover:text-gray-700">
                 Privacy Policy
                  </a>.
                  </p>
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16">
        
          <div className="mb-8 lg:mb-0">
            <img src="/Ddsgnr Library.png" alt="Ddsgnr" className="h-8" />
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 lg:gap-y-12 lg:gap-x-16 text-center lg:text-left">
    
            <div className="space-y-6">
              <h4 className="font-bold text-black text-lg mb-4 font-roboto">Courses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Business</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Development</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Technology</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Design</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Programming</a></li>
              </ul>
            </div>

           
            <div className="space-y-6">
              <h4 className="font-bold text-black text-lg mb-4 font-roboto">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Career</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Resume</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Learning</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Interview Preparation</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Jobs</a></li>
              </ul>
            </div>

            
            <div className="space-y-6">
              <h4 className="font-bold text-black text-lg mb-4 font-roboto">About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Contact</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Help/Support</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">FAQ</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Terms and Conditions</a></li>
                <li><a href="#" className="text-black hover:text-gray-800 font-roboto">Partners</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-black border-t-2 mt-6 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
        
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start w-full lg:w-auto">
          
            <p className="text-center lg:text-left text-sm text-black font-roboto mb-2 lg:mb-0">
              © 2023 Ddsgnr. All rights reserved.
            </p>

      
            <div className="flex justify-center lg:ml-4 text-sm text-black font-roboto space-x-4 mt-2 lg:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Cookies Settings</a>
            </div>
          </div>

          
          <div className="flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-black hover:text-gray-800">
              <img src="/Facebook.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <img src="/Instagram.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <img src="/Twitter.png" alt="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <img src="/Linkedin.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





