"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const StageAndLighting = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/stage.jpg')" }}
          className="flex flex-col justify-center md:h-[48vh] h-36 bg-slate-500 bg-opacity-70 bg-top bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Stage & Lighting
          </h3>
        </div>

        <div className="md:py-10 py-4 md:px-32 px-4 md:flex-row flex flex-col gap-10">
          <div className="md:w-1/2 w-full p-10 bg-slate-100 rounded-lg text-lime-900">
            <p className="text-base">
              We understand that staging and lighting play a crucial role in
              setting the mood and enhancing the visual impact of any event. Our
              creative designers, technical experts, and production specialists
              work closely with the client to design and construct captivating
              stages that align with their event objectives.
            </p>
            <p className="mt-5 text-base">
              We provide state-of-the-art lighting solutions, including
              intelligent lighting systems, atmospheric effects, and LED
              displays, to create dynamic and visually stunning environments.
            </p>
          </div>

          <div className="md:w-1/2 w-full p-10 flex flex-col justify-center items-center">
            <div>
              <h2>Our Stage and Lighting services</h2>
              <div className="w-32 h-1 bg-lime-500 mt-5"></div>
            </div>

            <ul className="mt-10 gap-2 list-decimal">
              <li>Innovative stage design and construction</li>
              <li>Carpets</li>
              <li>Decor</li>
              <li>
                Lighting arrangements with color-changing and motion effects
                (parcans, moving heads)
              </li>
              <li>Tents and structures (Dome/A-Frame/Arabian Style)</li>
              <li>Furniture and fittings</li>
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
    </>
  );
};

export default StageAndLighting;
