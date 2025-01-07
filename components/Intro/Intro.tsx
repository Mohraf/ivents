import Link from "next/link";
import React from "react";
import Video from "../Media/Video";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="bg-white text-black">

      <div className="bg-gray-100 text-gray-600 py-10">
      <h3 className="text-center md:px-32 md:pt-24 md:mb-10 p-4 pt-10 md:text-4xl text-lg bg-opacity-70">
        At iVENTS by GEiCO, we <span className="green">envision</span> a future whereby
        every event we touch becomes a benchmark of excellence, setting the
        standard for exceptional events management solutions.
      </h3>
      </div>

      <div className="text-center justify-items-center md:px-10 p-4">
        <Video />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between md:px-32 px-4 py-10">
        <div className="pb-10 md:pb-0 max-w-3xl flex-1">
          <div className="flex flex-row items-center justify-start md:gap-10 gap-4 py-4">
            <h3 className="md:text-2xl text-base font-semibold">
              iVENTS by <span className="green">GEiCO</span>
            </h3>
            <Link
              href="/companyprofile.pdf"
              locale={false}
              className="bggreen text-white hover:bg-gray-400 transition-colors duration-300 md:px-6 px-3 py-2 rounded-md text-sm font-medium"
            >
              OUR COMPANY PROFILE
            </Link>
          </div>

          <p className="text-gray-700 leading-relaxed py-4">
            Approaching two decades of experience in the events industry, we are
            a seasoned one-stop-shop catering to local and international clients
            with a track record of providing efficient, seamless and top-tier
            solutions. Based in Nairobi Kenya, with occasional assignments not
            only in East & Central Africa but also in other countries beyong the
            region. iVENTS by GEiCO's proficiency in the planning, management and
            execution of conferences, exhibitions and coorporate events is
            unrivaled.
          </p>
        </div>

        <div className="opacity-70 transition-opacity duration-300 hover:opacity-100 md:ml-10 flex-1 flex justify-center items-center">
          <Image
            src="/ivents-logo.png"
            alt="iVENTS Logo"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
