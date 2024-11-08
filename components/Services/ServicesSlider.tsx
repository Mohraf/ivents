"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./ServicesSlider.css";
import Image from "next/image";

const ServicesSlider = () => {
  const filteredItems = [
    {
      id: 2,
      img: "/conference.jpg",
      description: "CONFERENCES & EXHIBITIONS",
      link: "/conferencesAndExhibitions",
    },
    {
      id: 1,
      img: "/audio.jpg",
      description: "AUDIO & VISUAL",
      link: "/audioAndVisual",
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

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };
  return (
    <>
      <div className="trending py-10 md:px-32 bg-slate-200">
        <h4 className="text-center justify-center mb-0 text-black">OUR SERVICES</h4>
        <div className="px-10 py-4">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="bg-cover bg-center bg-no-repeat rounded-[1rem] h-[30vh] w-1/3 focus:ring focus:ring-lime-600 hover:ring hover:ring-lime-600"
                style={{
                  backgroundImage: `url(${item.img})`
                }}
              >
                <div className="item-description text-center break-words whitespace-normal text-sm bg-slate-500 bg-opacity-50 rounded-[1rem]">
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSlider;