"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TestimonialSlider.css"

const testimonials = [
  {
    id: 1,
    company: "Safaricom",
    person: "Georgina Kaaria",
    take: "Superb event. Everything was brilliant!! Your team did an awesome job. Thank you for your incredible support throughout our event and going above and beyond, our guests were raving about every aspect of the event. I would have no hesitation in recommending your expertise for any event, big or small.",
    logo: "/brand-2.jpg"
  },
  {
    id: 2,
    company: "Huawei",
    person: "Maureen Mwaniki",
    take: "Working with iVENTS was truly a pleaser. The attention to detail, responsiveness and flawless execution made our event a truly unforgettable experience.",
    logo: "/brand-1.jpg"
  },
  {
    id: 3,
    company: "CMG",
    person: "Bright Vision Media Group",
    take: "iVENTS exceeded our expectations in every way. Their professionalism, resourcefulness, and passion for creating memorable events was evident. We are grateful for their partnership and look forward to future collaborations.",
    logo: "/brand-3.jpg"
  }
]

const TestimonialSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("sliderCon");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("sliderCon");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };

  return (
    <div className="md:px-10 px-4">
      <h3 className="text-center justify-center font-bold">CLIENT'S TESTIMONIALS</h3>
      {mounted && (
        <div className="title-btns">
          <h3></h3>
          <div className="btns">
          <button
            onClick={slideLeft}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button 
            onClick={slideRight}
          >
            <FaChevronRight className="text-white" />
          </button>
          </div>
        </div>
      )}

      <div 
        className="row-container"
        id="sliderCon"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id}
            image={testimonial.logo} 
            take={testimonial.take} 
            person={testimonial.person}
            company={testimonial.company} 
          />
          ))}        
      </div>
    </div>
  );
};

export default TestimonialSlider;