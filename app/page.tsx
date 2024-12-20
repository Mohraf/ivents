import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import ServicesSlider from "@/components/Services/ServicesSlider";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Brands/Brands";
import Intro from "@/components/Intro/Intro";
import Hero from "@/components/Hero/Hero";
import Experiences from "@/components/Experiences/Experiences";
import Events from "@/components/Events/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Experiences />
      <Brands />
      <ServicesSlider />
      <Events />
      <TestimonialSlider />
    </>
  );
}
