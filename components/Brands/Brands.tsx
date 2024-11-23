import React from "react";
import Image from "next/image";
import "./Brands.css"
import Link from "next/link";

const Brands = () => {
  const brands: string[] = [
    '/brand-1.jpg', '/brand-2.jpg', '/brand-3.jpg', '/brand-4.jpg', '/brand-5.jpg',
    '/brand-6.jpg', '/brand-7.jpg', '/brand-8.jpg', '/brand-9.jpg', '/brand-10.jpg',
    '/brand-11.jpg', '/brand-12.jpg', '/brand-13.jpg', '/brand-14.jpg', '/brand-15.jpg'
  ];
  return (
    <div className="bg-black md:px-32 md:py-5 bg-opacity-100">
      <h3 className="md:px-10 px-4 py-4 text-white">Backed by strong global partners</h3>
      <div className="grid grid-cols-5 gap-4 md:p-10 p-4 mb-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 border rounded bg-white"
          >
            <Image
              src={brand}
              alt={`Brand ${index + 1}`}
              width={100} // Adjust width based on your image size
              height={100} // Adjust height based on your image size
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <h3 className="md:px-10 p-4 text-white">How We Do It</h3>

      <div className="md:pb-5 md:pt-2 py-10">      
        <div className="md:flex-row md:p-10 p-4 gap-10 flex flex-col items-center">
          <div data-aos="fade-down" className="items-center text-center rounded-[2rem] bg-slate-200 text-black p-10 flex flex-col justify-center h-full md:w-1/3 min-h-[40vh] gap-4">
              <Image alt="concept" src="/concept.svg" height={100} width={100} />
              <h4>Consult / Conceptualize</h4>
              <p>
              Concept Development,
              Budget Management and
              Venue Sourcing
              </p>
              <Link
                  href="/about"
                  className="link green"
              >
                  Learn more
              </Link>
          </div>

          <div data-aos="fade-up" className="items-center text-center rounded-[2rem] bg-slate-200 text-black p-10 flex flex-col justify-center h-full md:w-1/3 min-h-[40vh] gap-4">
              <Image alt="concept" src="/plan.svg" height={100} width={100} />
              <h4>Plan S.M.A.R.T</h4>
              <p>
                  360 degrees Planning. Specific, Measurable,
                  Achievable, Realistic and within a given Timeframe
              </p>
              <Link
                  href="/about"
                  className="link green"
              >
                  Learn more
              </Link>
          </div>

          <div data-aos="fade-down" className="items-center text-center rounded-[2rem] bg-slate-200 text-black p-10 flex flex-col justify-center h-full md:w-1/3 min-h-[40vh] gap-4">
              <Image alt="concept" src="/management.svg" height={100} width={100} />
              <h4>Setup and Management</h4>
              <p>
                  Mobilization. Setup/execution and 
                  coordination. Creating a memorable event
              </p>
              <Link
                  href="/about"
                  className="link green"
              >
                  Learn more
              </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Brands;
