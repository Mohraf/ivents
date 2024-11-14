import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import ServicesSlider from "@/components/Services/ServicesSlider";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Brands/Brands";
import Intro from "@/components/Intro/Intro";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Brands />
      <ServicesSlider />
      <TestimonialSlider />
    </>
  );
}
