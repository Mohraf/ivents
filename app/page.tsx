import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import ServicesSlider from "@/components/Services/ServicesSlider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Brands from "@/components/Brands/Brands";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="items-center mb-8">
        <Intro />
        <ServicesSlider />
        <Brands />
        <ServicesSlider />
        <TestimonialSlider />
      </div>

      <Footer />
    </div>
  );
}
