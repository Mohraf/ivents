"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    company: null,
    person: "Georgina Kaaria",
    take: "Superb event. Everything was brilliant!! Your team did an awesome job. Thank you for your incredible support throughout our event and going above and beyond, our guests were raving about every aspect of the event. I would have no hesitation in recommending your expertise for any event, big or small.",
    logo: null,
    animate: "fade-right",
  },
  {
    id: 2,
    company: "Huawei",
    person: "Maureen Mwaniki",
    take: "Working with iVENTS by GEiCO was truly a pleaser. The attention to detail, responsiveness and flawless execution made our event a truly unforgettable experience.",
    logo: "/brand-1.jpg",
    animate: "fade-up",
  },
  {
    id: 3,
    company: "CMG",
    person: "Bright Vision Media Group",
    take: "iVENTS by GEiCO exceeded our expectations in every way. Their professionalism, resourcefulness, and passion for creating memorable events was evident. We are grateful for their partnership and look forward to future collaborations.",
    logo: "/brand-3.jpg",
    animate: "fade-left",
  },
];

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
    <>
      <div className="md:px-32 md:py-5 py-3 px-4 bg-white text-black overflow-hidden">
        <h3 className="text-center justify-center head mb-4 md:mb-10 pt-10">
          What Our Clients Say About Us
        </h3>

        <div className="md:flex-row flex-col h-2/5 gap-10 flex pb-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.logo}
              take={testimonial.take}
              person={testimonial.person}
              company={testimonial.company}
              // animate={testimonial.animate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
