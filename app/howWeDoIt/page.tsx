"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer/Footer";

const HowWeDoIt = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize duration of animations
      easing: "ease-in-out",
      once: false, // Trigger animation only once/always
    });
  }, []);

  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/process.webp')" }}
          className="flex flex-col justify-center md:h-[68vh] h-48 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <div className="bg-white w-2/3 md:ml-4 ml-14 bg-opacity-50">
            <h3 className="md:px-32 px-4 text-lime-600 md:font-semibold md:text-5xl text-xl font-light md:text-start text-center">
              iVents Event Process
            </h3>
            <h4 className="md:px-32 px-4 text-black md:font-normal md:text-3xl text-lg font-thin md:text-start text-center">
              Step-by-step towards perfection
            </h4>
          </div>
        </div>

        <div className="process-sec py-4 px-32">
          <div className="method-one relative process-box hidden lg:flex items-start justify-between p-10">
            <div className="process-content w-[47%] p-10" data-aos="fade-right">
              <h2 className="text-xl">Consult / Conceptualize</h2>
              <p className="text-base mt-8 w-[85%] lg:w-[65%]">
                Concept Development, Budget Management and Venue Sourcing
              </p>
            </div>

            <div className="step-div pt-6 absolute min-h-full left-1/2 transform -translate-x-1/2">
              <Image src="/1st.webp" alt="first" height={164} width={164} />
              <div className="absolute h-[100%] left-1/2 border-dashed border-[1px] border-spacing-5 border-[#B7B7B7]  "></div>
            </div>

            <div className="process-step flex justify-between w-[47%]">
              <div className="process-img" data-aos="fade-left">
                <Image
                  height={700}
                  width={988}
                  className="w-[80%] float-right rounded-[20px]"
                  alt="concept"
                  src="/consult.webp"
                />
              </div>
            </div>
          </div>

          <div className="method-two relative process-box hidden lg:flex items-start justify-between p-10">
            <div className="process-content w-[47%] p-10" data-aos="fade-right">
              <h2 className="text-xl">Plan S.M.A.R.T</h2>
              <p className="text-base mt-8 w-[85%] lg:w-[65%]">
                360 degrees Planning. Specific, Measurable, Achievable,
                Realistic and within a given Timeframe
              </p>
            </div>

            <div className="step-div pt-6 absolute min-h-full left-1/2 transform -translate-x-1/2">
              <Image src="/2nd.webp" alt="first" height={164} width={164} />
              <div className="absolute h-[100%] left-1/2 border-dashed border-[1px] border-spacing-5 border-[#B7B7B7]  "></div>
            </div>

            <div className="process-step flex justify-between w-[47%]">
              <div className="process-img" data-aos="fade-left">
                <Image
                  height={700}
                  width={988}
                  className="w-[80%] float-right rounded-[20px]"
                  alt="concept"
                  src="/plansmart.webp"
                />
              </div>
            </div>
          </div>

          <div className="method-three relative process-box hidden lg:flex items-start justify-between p-10">
            <div className="process-content w-[47%] p-10" data-aos="fade-right">
              <h2 className="text-xl">Setup and Management</h2>
              <p className="text-base mt-8 w-[85%] lg:w-[65%]">
                Mobilization. Setup/execution and coordination. Creating a
                memorable event
              </p>
            </div>

            <div className="step-div pt-6 absolute min-h-full left-1/2 transform -translate-x-1/2">
              <Image src="/3rd.webp" alt="first" height={164} width={164} />
              <div className="absolute left-1/2  border-[#B7B7B7] "></div>
            </div>

            <div className="process-step flex justify-between w-[47%]">
              <div className="process-img" data-aos="fade-left">
                <Image
                  height={700}
                  width={988}
                  className="w-[80%] float-right rounded-[20px]"
                  alt="concept"
                  src="/setupmanage.webp"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mob-method flex flex-col p-4">
          <div className="method-one process-box relative flex lg:hidden items-start justify-between">
            <div className="process-step h-full w-[20%]">
              <div className="step-div">
                <Image
                  src="/1st.webp"
                  alt="first"
                  height={164}
                  width={164}
                />
                <div className="absolute h-[100%] left-[9%] border-dashed border-2 border-[#B7B7B7]"></div>
              </div>
            </div>
            <div className="process-details mt-4 ml-[5%] flex-col justify-between w-[80%]">
              <div className="process-image">
                <h2 className="text-2xl text-lime-700">Consult / Conceptualize</h2>
                <p className="mt-4 w-full text-base">Concept Development, Budget Management and Venue Sourcing</p>
                <Image
                  src="/consult.webp"
                  alt="consult"
                  width={988}
                  height={700}
                  className="rounded-[20px] mt-4 w-full"
                />
              </div>
            </div>
          </div>

          <div className="method-one mt-8 process-box relative flex lg:hidden items-start justify-between">
          <div className="process-step h-full w-[20%]">
              <div className="step-div">
                <Image
                  src="/2nd.webp"
                  alt="second"
                  height={164}
                  width={164}
                />
                <div className="absolute h-[100%] left-[9%] border-dashed border-2 border-[#B7B7B7]"></div>
              </div>
            </div>
            <div className="process-details mt-4 ml-[5%] flex-col justify-between w-[80%]">
              <div className="process-image">
                <h2 className="text-2xl text-lime-700">Plan S.M.A.R.T</h2>
                <p className="mt-4 w-full text-base">360 degrees Planning. Specific, Measurable, Achievable, Realistic and within a given Timeframe</p>
                <Image
                  src="/plansmart.webp"
                  alt="consult"
                  width={988}
                  height={700}
                  className="rounded-[20px] mt-4 w-full"
                />
              </div>
            </div>
          </div>

          <div className="method-one mt-8 process-box relative flex lg:hidden items-start justify-between">
          <div className="process-step h-full w-[20%]">
              <div className="step-div">
                <Image
                  src="/3rd.webp"
                  alt="third"
                  height={164}
                  width={164}
                />
                <div className="absolute left-[9%]"></div>
              </div>
            </div>
            <div className="process-details mt-4 ml-[5%] flex-col justify-between w-[80%]">
              <div className="process-image">
                <h2 className="text-2xl text-lime-700">Setup and Management</h2>
                <p className="mt-4 w-full text-base">Mobilization. Setup/execution and coordination. Creating a memorable event</p>
                <Image
                  src="/setupmanage.webp"
                  alt="consult"
                  width={988}
                  height={700}
                  className="rounded-[20px] mt-4 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowWeDoIt;
