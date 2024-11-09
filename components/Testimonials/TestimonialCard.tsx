"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  image: string;
  take: string;
  person: string;
  company: string;
}

const TestimonialCard = ({image, take, person, company}: IProps) => {
  return (
    <div className="h-full flex items-stretch text-white">
      <div className="h-[50vh] flex flex-col justify-center gap-2 bg-slate-900 p-4 rounded-[2rem]">
        <div className="space-y-2 flex flex-col">
          <div className="p-2">
            <div className="flex justify-between">
              <div className="w-1/2 h-full rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt="testimonial"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-1/2 text-center justify-center h-auto flex items-center">{company}</div>
            </div>
          </div>
          <p className="bg-slate-900 px-4 py-2 font-[inter] w-96 break-words whitespace-normal">
            {take}
          </p>
          <div className="bg-slate-900 p-2">{person}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
