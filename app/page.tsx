import Image from "next/image";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import TrendingSlider from "@/components/TrendingSlider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Brands from "@/components/Brands/Brands";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="items-center mb-8">
        <Brands />
        <TrendingSlider />
        <TestimonialSlider />
      </div>

      <Footer />
    </div>
  );
}
