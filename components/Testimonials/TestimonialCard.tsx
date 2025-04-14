"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import "./TestimonialSlider.css"

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  image: string | null;
  take: string;
  person: string;
  company: string | null;
  // animate: string;
}

const TestimonialCard = ({ image, take, person, company }: IProps) => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,  // Customize duration of animations
  //     easing: 'ease-in-out',
  //     once: false,  // Trigger animation only once
  //   });
  // },[])
  
  return (
    <div className="testimonial-card h-full p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 p-5 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
          {image ? (
            <Image
              src={image}
              alt={`${person}'s testimonial`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl text-gray-400">
                {person.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{person}</h4>
          {company && (
            <p className="text-sm text-gray-600">{company}</p>
          )}
        </div>
      </div>
      
      <blockquote className="relative">
        <span className="absolute top-0 left-0 text-6xl text-primary opacity-20">"</span>
        <p className={`${inter.className} text-gray-700 leading-relaxed pl-4 italic`}>
          {take}
        </p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
