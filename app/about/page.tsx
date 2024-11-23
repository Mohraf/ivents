"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize duration of animations
      easing: "ease-in-out",
      once: false, // Trigger animation only once/always
    });
  }, []);

  return (
    <>
      <div className="bg-black min-h-96 text-black md:pb-5 pb-10">
        <div
          // style={{ backgroundImage: "url('/green-bg.png')" }}
          className="py-16 md:h-[42vh] h-[36vh] bg-white bg-opacity-100 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-black md:font-thin md:text-5xl text-4xl font-light md:text-start text-center">
            Our Belief
          </h3>
          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-8">
            These values are not only the bedrock of our event management
            approach but also a testament to our dedication to delivery of
            service
          </p>
        </div>

        <div className="md:px-32 md:py-20 py-10 px-4 flex md:flex-row flex-col gap-5">
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/iDetail.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">i FOR DETAIL</h3>
            <p className="text-base md:mt-10 mt-5">
              iVENTS by GEiCO approaches each project with meticulous attention, and our
              unique "i for detail" demonstrates our commitment to excellence.
              This is complemented by our capacity to see the bigger picture,
              harmonizing the excecution of individual event components with our
              client's overarching objectives.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/brainstorm.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">INNOVATION</h3>
            <p className="text-base md:mt-10 mt-5">
              At iVENTS by GEiCO, we posses a deep understanding of both the local and
              global market trends, with our strength being our unparalleled
              knowledge that this constantly evolving market demands innovation
              and adaptability, essential elements in attaining the events goals
              and overall success.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/clients.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">CLIENT-CENTRIC</h3>
            <p className="text-base md:mt-10 mt-5">
              Our foremost priority is our clients, with our focus revolving
              around understanding, meeting and exceeding their needs and
              expectations. iVENTS by GEiCO will collaborate with subcontractors if the
              event dictates &#40;but under our direct supervision&#41;,
              allowing us to complete projects in a timely manner, and ensuring
              the same high standards are maintained.
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-black md:flex-row flex-col md:py-10 py-5 md:px-32 px-10 gap-10">
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="md:text-5xl text-2xl">MISSION</h2>
          <div className="h-1 w-10 mt-5 bg-lime-600"></div>
          <p className="mt-10">
            To transform our client's vision into a unique
            experience. Our drive to become a dependable as well the preferred
            choice of an events management partner is echoed in our ability to
            curate and provide tailor-made solutions for all events.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            alt="mission"
            src="/mission.jpg"
            width={988}
            height={700}
            className="rounded-lg"
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="flex bg-black md:flex-row flex-col md:pt-10 md:pb-24 pt-5 pb-16 md:px-32 px-10 gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            alt="mission"
            src="/vision.jpg"
            width={988}
            height={700}
            className="rounded-lg"
            data-aos="fade-right"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="md:text-5xl text-2xl">VISION</h2>
          <div className="h-1 w-10 mt-5 bg-lime-600"></div>
          <p className="mt-10">
            To be the leading event management company, recognised for our
            unwavering commitment to professionalism, innovation and quality
            delivery.
          </p>
          <p>
            We will continue to push the bounderies of event management and
            execution, aiming to be the trendsetter for sustainable solutions in
            the industry, shaping the future of conferences and celebrations.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
