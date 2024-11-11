"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer/Footer";

const AudioAndVisual = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize duration of animations
      easing: "ease-in-out",
      once: false, // Trigger animation only once/always
    });
  }, []);

  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/audio.jpg')" }}
          className="flex flex-col justify-center md:h-[68vh] h-48 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Audio and Visual
          </h3>
        </div>

        <div className="py-4 px-32">
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AudioAndVisual;
