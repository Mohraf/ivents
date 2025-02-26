"use client";

import React, { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    company: "Future Growth Forum",
    person: "Abdulaziz Ali",
    take: "Working with iVENTS by GEiCO was an exceptional experience. Their professionalism, responsiveness, and attention to detail ensured that our event was executed flawlessly. The entire team went above and beyond, exceeding our expectations in every way. We highly recommend iVENTS by GEiCO for their expertise and commitment to excellence.",
    logo: "/futuregrowthforum.jpg",
    animate: "fade-right",
  },
  {
    id: 2,
    company: "Huawei",
    person: "Maureen Mwende",
    take: "Despite the last-minute confirmation of the event, iVENTS by GEiCO delivered an exceptional experience. Their professionalism and quality of service exceeded our expectations. The team handled every aspect with efficiency, ensuring a seamless and successful event.",
    logo: "/brand-1.jpg",
    animate: "fade-right",
  },
  {
    id: 3,
    company: "Huawei",
    person: "Adam Lane",
    take: "iVENTS by GEiCO delivers even on last-minute requests. Their dedication, responsiveness, and ability to execute flawlessly make them a reliable event partner. Highly recommended!",
    logo: "/brand-1.jpg",
    animate: "fade-right",
  },
  {
    id: 4,
    company: null,
    person: "Georgina Kaaria",
    take: "Superb event. Everything was brilliant!! Your team did an awesome job. Thank you for your incredible support throughout our event and going above and beyond, our guests were raving about every aspect of the event. I would have no hesitation in recommending your expertise for any event, big or small.",
    logo: null,
    animate: "fade-right",
  },
  {
    id: 5,
    company: "Huawei",
    person: "Maureen Mwaniki",
    take: "Working with iVENTS by GEiCO was truly a pleaser. The attention to detail, responsiveness and flawless execution made our event a truly unforgettable experience.",
    logo: "/brand-1.jpg",
    animate: "fade-up",
  },
  {
    id: 6,
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
    <div className="bg-white text-black overflow-hidden py-4">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          What Our Clients Say About Us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="transform transition-all duration-300 hover:scale-105"
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
      </div>
    </div>
  );
};

export default TestimonialSlider;
