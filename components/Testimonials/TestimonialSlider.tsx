"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TestimonialSlider.css"

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="">
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
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialSlider;