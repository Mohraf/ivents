"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
// import "./TestimonialSlider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 4,
    company: "Huawei",
    person: "Adam Lane",
    take: "iVENTS by GEiCO delivers even on last-minute requests. Their dedication, responsiveness, and ability to execute flawlessly make them a reliable event partner.",
    logo: "/brand-1.jpg",
  },
  {
    id: 1,
    company: "Future Growth Forum",
    person: "Abdulaziz Ali",
    take: "Working with iVENTS by GEiCO was an exceptional experience. Their professionalism, responsiveness, and attention to detail ensured that our event was executed flawlessly.",
    logo: "/futuregrowthforum.jpg",
  },
  {
    id: 3,
    company: "GN Hearing",
    person: "Lisa Kharpoutlian",
    take: "I would like to extend a BIG THANK YOU for the excellent event organization. Our partners and ourselves were super happy with everything and thank the iVENTS by GEiCO team immensely. We definitely recommend iVENTS by GEiCO for everyone needing MICE support in the region",
    logo: "/gnbrand.png",
  },  
  {
    id: 7,
    company: "CMG",
    person: "Bright Vision Media Group",
    take: "iVENTS by GEiCO exceeded our expectations in every way. Their professionalism, resourcefulness, and passion for creating memorable events was evident.",
    logo: "/brand-3.jpg",
  },
  {
    id: 2,
    company: "Huawei",
    person: "Maureen Mwende",
    take: "Despite the last-minute confirmation of the event, iVENTS by GEiCO delivered an exceptional experience.",
    logo: "/brand-1.jpg",
  },
  {
    id: 5,
    company: null,
    person: "Georgina Kaaria",
    take: "Superb event. Everything was brilliant!! Your team did an awesome job.",
    logo: null,
  }
];

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-black overflow-hidden py-4 px-6">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          What Our Clients Say About Us
        </h3>

        <div className="relative flex items-center">
          <button
            className="absolute left-0 bg-gray-200 rounded-full p-2 z-10 shadow-md"
            onClick={slideLeft}
          >
            <ChevronLeft size={24} color="green" />
          </button>

          <div
            ref={sliderRef}
            className="flex md:gap-8 gap-6 overflow-hidden scroll-smooth px-10 py-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="md:min-w-[420px] min-w-[280px] transform transition-all duration-300 hover:scale-105"
              >
                <TestimonialCard
                  image={testimonial.logo}
                  take={testimonial.take}
                  person={testimonial.person}
                  company={testimonial.company}
                />
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 bg-gray-200 rounded-full p-2 z-10 shadow-md"
            onClick={slideRight}
          >
            <ChevronRight size={24} color="green" />
          </button>
        </div>
    </div>
  );
};

export default TestimonialSlider;