import { Suspense } from "react";
import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import ServicesSlider from "@/components/Services/ServicesSlider";
import Footer from "@/components/Footer/Footer";
import Brands from "@/components/Brands/Brands";
import Intro from "@/components/Intro/Intro";
import Hero from "@/components/Hero/Hero";
import Experiences from "@/components/Experiences/Experiences";
import Events from "@/components/Events/Events";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <Hero />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <Intro />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <Experiences />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <Brands />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <ServicesSlider />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <Events />
      </Suspense>
      <Suspense
        fallback={<Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />}
      >
        <TestimonialSlider />
      </Suspense>
    </>
  );
}
