"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer/Footer";

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
      <div className="bg-slate-200 min-h-96 text-black md:pb-5 pb-10">
        <div
          style={{ backgroundImage: "url('/dark.jpeg')" }}
          className="justify-between py-32 md:h-[56vh] h-[64vh] bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-thin md:text-5xl text-4xl font-light md:text-start text-center">
            Our Belief
          </h3>
          <p className="md:px-32 px-4 text-white md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-10">
            These values are not only the bedrock of our event management
            approach but also a testament to our dedication to delivery of
            service
          </p>
        </div>

        <div className="md:px-32 md:py-20 py-10 px-4 flex md:flex-row flex-col gap-5">
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100">
            <h3 className="md:text-3xl text-2xl">i FOR DETAIL</h3>
            <p className="text-base md:mt-10 mt-5">
              iVents approaches each project with meticulous attention, and our
              unique "i for detail" demonstrates our commitment to excellence.
              This is complemented by our capacity to see the bigger picture,
              harmonizing the excecution of individual event components with our
              client's overarching objectives.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100">
            <h3 className="md:text-3xl text-2xl">INNOVATION</h3>
            <p className="text-base md:mt-10 mt-5">
              At iVents, we posses a deep understanding of both the local and
              global market trends, with our strength being our unparalleled
              knowledge that this constantly evolving market demands innovation
              and adaptability, essential elements in attaining the events goals
              and overall success.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-lg w-full bg-slate-100">
            <h3 className="md:text-3xl text-2xl">CLINET-CENTRIC</h3>
            <p className="text-base md:mt-10 mt-5">
              Our foremost priority is our clients, with our focus revolving
              around understanding, meeting and exceeding their needs and
              expectations. iVENTS will collaborate with subcontractors if the
              event dictates &#40;but under our direct supervision&#41;,
              allowing us to complete projects in a timely manner, and ensuring
              the same high standards are maintained.
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:py-10 py-5 md:px-32 px-10 gap-10">
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="overline">MISSION</h2>
          <p className="mt-10">
            Our mission is to transform our client's vision into a unique
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

      <div className="flex md:flex-row flex-col md:py-10 py-5 md:px-32 px-10 gap-10">
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
          <h2 className="overline">VISION</h2>
          <p className="mt-10">
            To be the leading event management company, recognised for our
            unwavering commitment to professionalism, innovation and quality
            delivery.
          </p>
          <p>
            We will continue to push the bounderies of event management and
            execution, aiming to be the trendsetter for sustainable solutions in
            the
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
