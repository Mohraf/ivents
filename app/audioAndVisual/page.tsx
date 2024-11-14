import React, { useEffect } from "react";
import Link from "next/link";

const AudioAndVisual = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/audio.jpg')" }}
          className="flex flex-col justify-center md:h-[48vh] h-36 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Audio and Visual
          </h3>
        </div>

        <div className="md:py-10 py-4 md:px-32 px-4 md:flex-row flex flex-col gap-10">
          <div className="md:w-1/2 w-full p-10 bg-slate-100 rounded-lg text-lime-900">
            <p className="text-base">
              At iVENTS, we understand the importance of high-quality audio and
              visual experiences in creating immersive events. We offer
              state-of-the-art equipment and cutting-edge technology to ensure
              seamless sound, impactful visuals, and captivating multimedia
              presentations.
            </p>
            <p className="mt-5 text-base">
              Our team of skilled technicians and engineers plan and execute the
              audio and visual setups, each tailored to meet the unique
              requirements of that event and enhancing the overall attendee
              experience.
            </p>
          </div>

          <div className="md:w-1/2 w-full p-10 flex flex-col justify-center items-center">
            <div>
              <h2>Our Audio and Visual Services</h2>
              <div className="w-32 h-1 bg-lime-500"></div>
            </div>

            <ul className="mt-10 gap-2 list-decimal">
              <li>Cutting-edge sound systems</li>
              <li>High-definition LED screens</li>
              <li>visual displays</li>
              <li>Photography</li>
              <li>Live streaming</li>
              <li>Interpretation and SIE</li>
            </ul>            
            <Link href="/contact" className="mt-5 p-2 outline outline-lime-500 hover:bg-white rounded-lg">Book with us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioAndVisual;
