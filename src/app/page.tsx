"use client"
import { useState } from "react";
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/services'
import Testimonials from './components/testonomials';
import TeamSection from './components/Team';
import Footer from './components/Footer';
import CoursesSection from "./components/Courses";



const Page = () => {
  return (
    <div>
       <Header />
       

      <Hero />

      <Categories />
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our Achievements
      </h2>
      {/* Mobile paragraph */}
      <p className="text-black max-w-3xl mx-auto block md:hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut enim in eros elementum tristique.
      </p>
      {/* Desktop paragraph */}
      <p className="text-black max-w-3xl mx-auto hidden md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla ut commodo diam libero vitae erat.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="p-4 transform hover:scale-105 transition-transform duration-200">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
          +200
        </div>
        <div className="text-sm md:text-base text-black font-medium">
          Courses
        </div>
      </div>

      <div className="p-4 transform hover:scale-105 transition-transform duration-200">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
          50K
        </div>
        <div className="text-sm md:text-base text-black font-medium">
          Mentors
        </div>
      </div>

      <div className="p-4 transform hover:scale-105 transition-transform duration-200">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
          370k
        </div>
        <div className="text-sm md:text-base text-black font-medium">
          Students
        </div>
      </div>

      <div className="p-4 transform hover:scale-105 transition-transform duration-200">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black 00 mb-2">
          100+
        </div>
        <div className="text-sm md:text-base text-black font-medium">
          Recognition
        </div>
      </div>
    </div>
  </div>
</section>

       <CoursesSection />
       <TeamSection />
      <Testimonials />
      <Footer />
    </div>

   
  );
};

export default Page;
