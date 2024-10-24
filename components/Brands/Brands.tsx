import React from "react";
import Image from "next/image";

const Brands = () => {
  const brands: string[] = [
    '/brand-1.jpg', '/brand-2.jpg', '/brand-3.jpg', '/brand-4.jpg', '/brand-5.jpg',
    '/brand-6.jpg', '/brand-7.jpg', '/brand-8.jpg', '/brand-9.jpg', '/brand-10.jpg',
    '/brand-11.jpg', '/brand-12.jpg', '/brand-13.jpg', '/brand-14.jpg', '/brand-15.jpg'
  ];
  return (
    <>
      <h3 className="p-4">BRANDS THAT TRUST US</h3>
      <div className="grid grid-cols-5 gap-4 p-4">
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
    </>
  );
};

export default Brands;
