"use client";
import React, {useEffect} from "react";
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
    <div className="h-[56vh] md:w-1/3 w-full text-white flex flex-col justify-between bggreen p-4 rounded-[2rem]">
      <div className="p-2">
        <div className="flex justify-between">
          <div className="w-1/2 h-full rounded-full overflow-hidden">
            {image? <Image src={image} alt="testimonial" width={100} height={100} /> : ""}            
          </div>
          <div className="w-1/2 text-center justify-center h-auto flex items-center">
            {company}
          </div>
        </div>
      </div>
      <p className="bggreen text-white px-4 py-2 font-[inter]">{take}</p>
      <div className="bggreen text-white p-2">{person}</div>
    </div>
  );
};

export default TestimonialCard;
