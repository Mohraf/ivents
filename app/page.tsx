"use client"
import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import ServicesSlider from "@/components/Services/ServicesSlider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Brands from "@/components/Brands/Brands";
import Intro from "@/components/Intro/Intro";
import Hero from "@/components/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Customize duration of animations
      easing: 'ease-in-out',
      once: false,  // Trigger animation only once
    });
  },[])
  
  return (
    <div className="">
      <div className="items-center mb-8">
        <Hero />
        <Intro />
        <Brands />
        <ServicesSlider />
        <TestimonialSlider />
      </div>

      <Footer />
    </div>
  );
}
