import React from "react";
import Link from "next/link";

const PrintingAndBranding = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-96 text-black pb-10">
        <div
          style={{ backgroundImage: "url('/printing.jpg')" }}
          className="flex flex-col justify-center md:h-[48vh] h-36 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat"
        >
          <h3 className="md:px-32 px-4 text-white md:font-semibold md:text-5xl text-2xl font-light md:text-start text-center">
            Printing & Branding
          </h3>
        </div>

        <div className="md:py-10 py-4 md:px-32 px-4 md:flex-row flex flex-col gap-10">
          <div className="md:w-1/2 w-full p-10 bg-slate-100 rounded-lg text-lime-900">
            <p className="text-base">
            iVENTS offers comprehensive printing and branding solutions to ensure consistent and impactful messaging throughout events. From designing eye-catching banners, backdrops, and signage to creating visually appealing promotional materials such as brochures, flyers, and business cards, we help clients establish a strong brand presence.
            </p>
            <p className="mt-5 text-base">
            The graphic design team ensures that all materials are of the highest quality, reflecting the client’s brand identity and effectively conveying their key messages.
            </p>
          </div>

          <div className="md:w-1/2 w-full p-10 flex flex-col justify-center items-center">
            <div>
              <h2>Our Printing and Branding services</h2>
              <div className="w-32 h-1 bg-lime-500 mt-5"></div>
            </div>

            <ul className="mt-10 gap-2 list-decimal">
              <li>Roll Up Banners</li>
              <li>Branded event displays and signage</li>
              <li>Customized giveaways (i.e. branded gifts, polos, T-shirts, notebooks etc )</li>
              <li>Marketing collateral (flyers, brochures)</li>
              <li>Fabrication</li>
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

export default PrintingAndBranding;
