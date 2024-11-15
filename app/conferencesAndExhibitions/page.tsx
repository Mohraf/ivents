import React from "react";
import Link from "next/link";

const ConferencesAndExhibitions = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/conference.jpg')" }}
          className="flex flex-col justify-center md:h-[48vh] h-36 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Conference & Exhibition
          </h3>
        </div>

        <div className="md:py-10 py-4 md:px-32 px-4 md:flex-row flex flex-col gap-10">
          <div className="md:w-1/2 w-full p-10 bg-slate-100 rounded-lg text-lime-900">
            <p className="text-base">
            We specialize in planning and executing successful exhibitions and conferences that bring brands, businesses, and professionals together. We work closely with clients to conceptualize, design, and manage every aspect of the conference and/or exhibition, including venue selection, booth designs, logistics, exhibitor coordination, attendee registration, and on-site management.
            </p>
            <p className="mt-5 text-base">
            From concept to execution, we create engaging environments that foster meaningful connections and drive business growth, with superbly crafted experiences that elevate your event’s impact.
            </p>
          </div>

          <div className="md:w-1/2 w-full flex p-10 flex-col justify-center items-center">
            <div>
              <h2>Our Conference & Exhibition services</h2>
              <div className="w-32 h-1 bg-lime-500 mt-5"></div>
            </div>

            <ul className="mt-10 gap-2 list-decimal">
              <li>Conceptualizing and design of interactive spaces</li>
              <li>Custom-made booth construction</li>
              <li>Shell Scheme/Octanorm Stands</li>
              <li>Airport transfers, hotel booking, and accommodation.</li>
              <li>Media Coordination</li>
              <li>Publicity/influencer engagement</li>
            </ul>

            
            <Link href="/contact" className="mt-5 p-2 outline outline-lime-500 hover:bg-white rounded-lg">Book with us</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConferencesAndExhibitions