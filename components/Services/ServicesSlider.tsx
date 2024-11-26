"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React, { useEffect } from "react";
import "./ServicesSlider.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSlider = () => {
  const services = [
    {
      id: 1,
      img: "/audionvisual.jpg",
      description: "AUDIO & VISUAL",
      link: "/audioAndVisual",
    },
    {
      id: 2,
      img: "/conference.jpg",
      description: "CONFERENCES & EXHIBITIONS",
      link: "/conferencesAndExhibitions",
    },
    {
      id: 3,
      img: "/stage.jpg",
      description: "STAGE & LIGHTING",
      link: "/stageAndLighting",
    },
    {
      id: 4,
      img: "/printing.jpg",
      description: "PRINTING & BRANDING",
      link: "/printingAndBranding",
    },
    {
      id: 5,
      img: "/products.jpg",
      description: "PRODUCTS & LAUNCHES",
      link: "/productLaunches",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Customize duration of animations
      easing: 'ease-in-out',
      once: false,  // Trigger animation only once
    });
  },[])

  return (
    <>
      <div className="bg-white min-h-96 overflow-hidden">
        <div className="md:px-32 px-4 py-16 text-black text-center">
          <h3 className="md:font-extralight md:text-lg">OUR EXPERTISE</h3>
          <h4 className="mt-2 green md:text-4xl md:font-thin text-2xl">
            We Offer A Wide Range Of Services
          </h4>

          <div className="md:block md:mt-0 mt-4 flex flex-col">
            <div className="services-row relative bottom-[1rem] xl:bottom-[-2.5rem] lg:bottom-[-2.5rem] md:bottom-[-2rem] flex md:flex-row flex-col justify-center md:mx-auto gap-4">
              <Link
                href="/audioAndVisual"
                className="service-box relative rounded-[20px] h-[43vh] md:w-[31%] lg:w-[32%] bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('/audionvisual.jpg')",
                }}
                data-aos="fade-down"
              >
                <h4 className="text-lg absolute service-upper-head  service-head top-[2rem] left-[2rem] text-white text-left">
                  Audio and Visual
                </h4>
              </Link>

              <Link
                href="/stageAndLighting"
                className="service-box relative rounded-[20px] h-[43vh] md:w-[31%] lg:w-[32%] bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('/stagenlight.jpg')",
                }}
                data-aos="fade-down"
              >
                <h4 className="text-lg absolute service-upper-head  service-head bottom-[7rem] left-[2rem] text-white text-left">
                  Stage and Lighting
                </h4>
              </Link>
            </div>
            <div className="services-row md:mt-[1.7rem] flex md:flex-row flex-col justify-center gap-4">
              <Link
                className="service-box relative rounded-[20px] min-h-[50vh] md:w-1/4 bg-center bg-no-repeat bg-cover"
                href="/conferencesAndExhibitions"
                style={{
                  backgroundImage: "url('/conference.jpg')",
                }}
                data-aos="fade-right"
              >
                <h4 className="text-lg absolute bottom-[3rem] service-below-head service-head left-[2rem] text-black text-left">
                  Conferences And Exhibitions
                </h4>
              </Link>

              <Link
                className="service-box relative rounded-[20px] md:mt-[9%] min-h-[43vh] bg-cover bg-no-repeat bg-center md:w-1/4 md:ml-6"
                href="/printingAndBranding"
                style={{
                  backgroundImage: "url('/printing.jpg')",
                }}
                data-aos="fade-up"
              >
                <h4 className="text-lg absolute text-white service-below-head  service-head-v2 bottom-[6rem] left-[2rem] text-left">
                  Printing and Branding
                </h4>
              </Link>

              <Link
                className="service-box relative rounded-[20px] min-h-[50vh] bg-cover bg-no-repeat bg-center md:w-1/4 md:ml-6 cursor-pointer"
                href="/productLaunches"
                style={{
                  backgroundImage: "url('/products.jpg')",
                }}
                data-aos="fade-left"
              >
                <h4 className="text-lg absolute text-black service-below-head   bottom-[3rem] service-head left-[2rem] text-left">
                  Products And Launches
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSlider;
