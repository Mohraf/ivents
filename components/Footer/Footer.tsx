import React from "react";
import Image from "next/image";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="items-center">
        <h4 className="text-center">
          We care about your brand and your mission
        </h4>
        <h4 className="text-center mb-7">We also do events</h4>

        <div className="flex items-center justify-center w-full">
          <Image
            aria-hidden
            src="/footer.png"
            alt="iVENTS by GEiCO"
            width={1024}
            height={100}
          />
        </div>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p className="m-3">© Copyright ©2024 iVENTS by GEiCO</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
