"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const ProductLaunches = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/products.jpg')" }}
          className="flex flex-col justify-center md:h-[48vh] h-36 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Products & Launches
          </h3>
        </div>

        <div className="md:py-10 py-4 md:px-32 px-4 md:flex-row flex flex-col gap-10">
          <div className="md:w-1/2 w-full p-10 bg-slate-100 rounded-lg text-lime-900">
            <p className="text-base">
            Launching a new product requires careful planning, strategic execution, and an unforgettable experience for attendees. At iVENTS, we specialize in creating exceptional product launch events that generate excitement, build anticipation, and leave a lasting impression. From venue selection and stage design to audiovisual production and audience engagement strategies, we handle every aspect of the product launch process.
            </p>
            <p className="mt-5 text-base">
            Our team ensures seamless coordination, effective messaging, and experiences that drive product awareness and consumer engagement.
            </p>
          </div>

          <div className="md:w-1/2 w-full p-10 flex flex-col justify-center items-center">
            <div>
              <h2>Our Products and Launches services</h2>
              <div className="w-32 h-1 bg-lime-500"></div>
            </div>

            <ul className="mt-10 gap-2 list-decimal">
              <li>Corporate Launches and Brand Activations</li>
              <li>Road Shows</li>
              <li>
              Experiential marketing
              </li>
              <li>Award Ceremonies and Team Building</li>
              <li>Conference Assistants/Ushers</li>
              <li>Venue Sourcing</li>
              <li>Confetti and pyrotechniques</li>
            </ul>

            <Link
              href="/contact"
              className="mt-5 p-2 outline outline-lime-500 hover:bg-white rounded-lg"
            >
              Book with us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductLaunches;
