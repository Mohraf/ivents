"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserTie,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaSync,
  FaAward,
  FaPlus
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
          className="py-16 md:min-h-[64vh] min-h-screen bg-white bg-opacity-100 bg-center bg-cover bg-no-repeat"
        >
          <h2 className="md:px-32 px-4 text-black md:font-thin md:text-5xl text-3xl font-light md:text-start text-center">
            Who We Are
          </h2>

          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-8">
            Approaching two decades of experience in the events industry, we are a seasoned one-stop-shop catering to local and international clients with a track record of
            providing efficient, seamless and top-tier solutions. Based in Nairobi Kenya, with occasional assignments not only in East & Central Africa but also in other 
            countries beyong the region. iVENTS by GEiCO's proficiency in the planning, management and execution of conferences, exhibitions and coorporate events is unrivaled.
          </p>

          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-4">
            Working as an extension of your marketing and communication teams, our collection of strategists, technicians, creatives and magicians target to deliver ivent-ful
            experiences that resonate with your audience, confident to meet all your requirements with expedience and a value-for-money guarantee.
          </p>

          <h3 className="md:px-32 px-4 text-black md:font-thin md:text-5xl text-3xl font-light md:text-start text-center mt-8">
            The Core
          </h3>
          <p className="md:px-32 px-4 text-black md:font-extralight md:text-xl text-base font-thin md:text-start text-center mt-8">
            These values are not only the bedrock of our event management
            approach but also a testament to our dedication to delivery of
            service
          </p>
        </div>

        <div className="md:px-32 md:py-5 py-10 px-4 flex md:flex-row flex-col gap-10">
          <div className="md:w-1/3 p-10 flex flex-col rounded-xl w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/iDetail.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">i FOR DETAIL</h3>
            <p className="text-base md:mt-5 mt-3">
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
            <p className="text-base md:mt-5 mt-5">
              At iVENTS by GEiCO, we possess a deep understanding of both the
              local and global market trends, with our strength being our
              unparalleled knowledge that this constantly evolving market
              demands innovation and adaptability, essential elements in
              attaining the events goals and overall success.
            </p>
          </div>
          <div className="md:w-1/3 p-10 flex flex-col rounded-xl w-full bg-slate-100 text-center items-center">
            <Image alt="i" src="/clients.svg" width={100} height={100} />
            <h3 className="md:text-3xl text-2xl mt-2">CLIENT-CENTRIC</h3>
            <p className="text-base md:mt-5 mt-5">
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
              A flexible team with years of industry knowledge, focused on delivering high-quality events within your budget
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
              Digital solutions that enhance event planning, execution, and experience, from 3D Designs to attendee tracking.
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
              Clear, honest and well detailed information about costs, ensuring there are no hidden charges or unexpected fees.
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaAward className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">Proven Track Record</h4>
            <p className="mt-2 text-gray-600">
              A winning experience backed by 100% commitment from the 2023-2024 recipients of the Huawei Excellent Marketing Service Partner Award
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex">              
            <FaPlus className="w-12 h-12 text-gray-700" /> <FaPlus className="w-12 h-12 text-gray-700" /> 
            </div>
            <h4 className="text-xl font-semibold mt-4">Advantage</h4>
            <p className="mt-2 text-gray-600">
            Leverage our established relationships with suppliers/venues for better deals without compromising quality
            </p>
          </div>

          <div
            className="p-6 bg-slate-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaSync className="w-12 h-12 text-gray-700" />
            <h4 className="text-xl font-semibold mt-4">360degrees Event Management</h4>
            <p className="mt-2 text-gray-600">
              24/7, end-to-end dedicated support throughout your event journey, allowing you to focus on your vision and enjoy total peace of mind.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
