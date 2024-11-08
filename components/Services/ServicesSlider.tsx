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
              <div key={item.id} className="row-item">
                <Link href={item.link} className="link">
                  <div className="item-header">
                    <Image
                      src={item.img}
                      alt="product"
                      width={550}
                      height={450}
                    />
                  </div>
                  <div className="item-description text-center break-words whitespace-normal text-sm">
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSlider;