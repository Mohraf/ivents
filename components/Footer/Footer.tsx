"use client"
import {useEffect, useState} from "react";
import Image from "next/image";


const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(()=>{
    let year = new Date().getFullYear()
    setYear(year)
  },[])

  return (
    <>
      <footer
        className="footer items-center bg-cover bg-center bg-no-repeat bg-black text-white"
        style={{
          // backgroundImage: "url('/green-bg.png')",
        }}
      >
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <div className="pt-5">
            <h4 className="text-center md:text-5xl text-xl font-semibold md:font-bold">
              We care about your brand and your mission
            </h4>
            <h4 className="text-center mb-7 md:text-3xl text-sm font-light md:font-thin">
              We also do events
            </h4>
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              aria-hidden
              src="/newbannerivents.jpg"
              alt="iVENTS by GEiCO"
              width={1280}
              height={100}
            />
          </div>
        </div>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p className="m-3">© Copyright {year}   iVENTS by GEiCO</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
