"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserTie,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaChartBar,
  FaUsers,
  FaSync,  
} from "react-icons/fa";

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
      <div className="bg-white min-h-96 text-black md:pb-5 pb-10">
        <div
          // style={{ backgroundImage: "url('/green-bg.png')" }}
          className="py-16 md:h-[36vh] h-[24vh] bg-white bg-opacity-100 bg-center bg-cover bg-no-repeat"
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

        <div className="md:px-32 md:py-10 py-10 px-4 flex md:flex-row flex-col gap-10">
          <div className="md:w-1/3 p-10 flex flex-col rounded-xl w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/iDetail.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">i FOR DETAIL</h3>
            <p className="text-base md:mt-10 mt-5">
              iVENTS by GEiCO approaches each project with meticulous attention,
              and our unique "i for detail" demonstrates our commitment to
              excellence. This is complemented by our capacity to see the bigger
              picture, harmonizing the excecution of individual event components
              with our client's overarching objectives.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-xl w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/brainstorm.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">INNOVATION</h3>
            <p className="text-base md:mt-10 mt-5">
              At iVENTS by GEiCO, we posses a deep understanding of both the
              local and global market trends, with our strength being our
              unparalleled knowledge that this constantly evolving market
              demands innovation and adaptability, essential elements in
              attaining the events goals and overall success.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-xl w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/clients.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">CLIENT-CENTRIC</h3>
            <p className="text-base md:mt-10 mt-5">
              Our foremost priority is our clients, with our focus revolving
              around understanding, meeting and exceeding their needs and
              expectations. iVENTS by GEiCO will collaborate with subcontractors
              if the event dictates &#40;but under our direct supervision&#41;,
              allowing us to complete projects in a timely manner, and ensuring
              the same high standards are maintained.
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:py-20 py-10 md:px-32 px-10 gap-16 items-center">
        <div className="md:w-1/2 w-full flex flex-col" data-aos="fade-right">
          <span className="text-lime-600 font-medium tracking-widest">
            OUR MISSION
          </span>
          <h2 className="md:text-5xl text-3xl font-bold mt-3">
            Transforming Visions Into Reality
          </h2>
          <div className="h-1 w-20 mt-6 bg-lime-600 rounded-full"></div>
          <p className="mt-8 text-gray-400 leading-relaxed">
            To transform our client's vision into a unique experience. Our drive
            to become a dependable as well the preferred choice of an events
            management partner is echoed in our ability to curate and provide
            tailor-made solutions for all events.
          </p>
          {/* Optional: Add a button or additional content here */}
        </div>
        <div className="md:w-1/2 w-full" data-aos="fade-left">
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-600/20 rounded-lg transform rotate-3"></div>
            <Image
              alt="mission"
              src="/newmission.jpg"
              width={988}
              height={700}
              className="rounded-lg shadow-xl relative"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex md:flex-row flex-col-reverse md:py-20 py-10 md:px-32 px-10 gap-16 items-center bg-slate-50">
        <div className="md:w-1/2 w-full" data-aos="fade-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-600/20 rounded-lg transform -rotate-3"></div>
            <Image
              alt="vision"
              src="/newvision.jpg"
              width={988}
              height={700}
              className="rounded-lg shadow-xl relative"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col" data-aos="fade-left">
          <span className="text-lime-600 font-medium tracking-widest">
            OUR VISION
          </span>
          <h2 className="md:text-5xl text-3xl text-gray-700 font-bold mt-3">
            Leading The Industry Forward
          </h2>
          <div className="h-1 w-20 mt-6 bg-lime-600 rounded-full"></div>
          <p className="mt-8 text-gray-600 leading-relaxed">
            To be the leading event management company, recognised for our
            unwavering commitment to professionalism, innovation and quality
            delivery.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We will continue to push the boundaries of event management and
            execution, aiming to be the trendsetter for sustainable solutions in
            the industry, shaping the future of conferences and celebrations.
          </p>
          {/* Optional: Add a button or additional content here */}
        </div>
      </div>

      <div className="bg-white text-black md:py-16 py-10 md:px-32 px-10">
        <h2 className="md:text-5xl text-3xl text-center">Why iVENTS</h2>
        <h3 className="md:text-2xl text-xl text-center mt-4 green">
          CLIENT BENEFITS
        </h3>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-12">
          <div className="p-6 bg-slate-100 rounded-lg" data-aos="fade-up">
            <FaUserTie className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">Expertise</h4>
            <p className="mt-2 text-gray-600">
              Professional team with years of industry experience and knowledge
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaLaptopCode className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">Technology</h4>
            <p className="mt-2 text-gray-600">
              Cutting-edge event management tools and solutions
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaFileInvoiceDollar className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">Billing Transparency</h4>
            <p className="mt-2 text-gray-600">
              Clear and detailed pricing with no hidden costs
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaChartBar className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">Reporting</h4>
            <p className="mt-2 text-gray-600">
              Comprehensive event analytics and performance reports
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaUsers className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">24/7 Dedicated Team</h4>
            <p className="mt-2 text-gray-600">
            Assigned team manager 24/7 throughout your event journey
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaSync className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">360degree end to end event management</h4>
            <p className="mt-2 text-gray-600">
              Round-the-clock support throughout your event journey
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
