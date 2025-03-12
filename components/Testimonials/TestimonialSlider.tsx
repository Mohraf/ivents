"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "Future Growth Forum",
    person: "Abdulaziz Ali",
    take: "Working with iVENTS by GEiCO was an exceptional experience. Their professionalism, responsiveness, and attention to detail ensured that our event was executed flawlessly.",
    logo: "/futuregrowthforum.jpg",
  },
  {
    id: 2,
    company: "Huawei",
    person: "Maureen Mwende",
    take: "Despite the last-minute confirmation of the event, iVENTS by GEiCO delivered an exceptional experience.",
    logo: "/brand-1.jpg",
  },
  {
    id: 3,
    company: "Huawei",
    person: "Adam Lane",
    take: "iVENTS by GEiCO delivers even on last-minute requests. Their dedication, responsiveness, and ability to execute flawlessly make them a reliable event partner.",
    logo: "/brand-1.jpg",
  },
  {
    id: 4,
    company: null,
    person: "Georgina Kaaria",
    take: "Superb event. Everything was brilliant!! Your team did an awesome job.",
    logo: null,
  },
  {
    id: 5,
    company: "Huawei",
    person: "",
    take: "Working with iVENTS by GEiCO was truly a pleasure. The attention to detail, responsiveness and flawless execution made our event a truly unforgettable experience.",
    logo: "/brand-1.jpg",
  },
  {
    id: 6,
    company: "CMG",
    person: "Bright Vision Media Group",
    take: "iVENTS by GEiCO exceeded our expectations in every way. Their professionalism, resourcefulness, and passion for creating memorable events was evident.",
    logo: "/brand-3.jpg",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-black overflow-hidden py-4">
      <div className="container mx-auto px-4 py-16 max-w-7xl relative">
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
            className="flex gap-8 overflow-hidden scroll-smooth px-10s py-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[300px] transform transition-all duration-300 hover:scale-105"
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
    </div>
  );
};

export default TestimonialSlider;