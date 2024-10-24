"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const TestimonialCard = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-900 p-4 rounded">
        <div className="space-y-2">
          <div className="p-2">
            <div className="flex justify-between">
              <div className="w-1/2 h-full rounded-full overflow-hidden">
                <Image
                  src="/huwaei.jpg"
                  alt="testimonial"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-1/2 text-center justify-center h-auto flex items-center">Company Name</div>
            </div>
          </div>
          <div className="bg-slate-900 p-2 font-[inter] w-96 break-words whitespace-normal">
            Superb event. Everything was brilliant!! Your team did an awesome
            job. Thank you for your incredible support throughout our event and
            going above and beyond, our guests were raving about every aspect of
            the event. I would have no hesitation in recommending your expertise
            for any event, big or small.
          </div>
          <div className="bg-slate-900 p-2">Georgina Kaaria</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
