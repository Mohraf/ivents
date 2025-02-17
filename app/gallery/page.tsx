import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const collections = [
    {
      id: 1,
      title: "GN Hearing",
      thumbnail: "/gn-hearing/cover.jpg",
    },    
    {
      id: 2,
      title: "Media Entertainment Summit Cloud Event",
      thumbnail: "/huawei1/cover.jpg",
    },
    {
      id: 3,
      title: "IP and Optix 2024",
      thumbnail: "/huawei-ip/cover.jpg",
    },
    {
      id: 4,
      title: "Pan Africa BESS Summit",
      thumbnail: "/bess/cover.jpg",
    },
    {
      id: 5,
      title: "Huawei IT Day 2024",
      thumbnail: "/huawei-it/cover.jpg",
    },
    {
      id: 6,
      title: "ICT Competition 2024",
      thumbnail: "/huawei-ict-24/cover.jpg",
    },
    {
      id: 7,
      title: "China Media Group New Year",
      thumbnail: "/cmg/cover.jpg",
    },
    {
      id: 8,
      title: "IT Day",
      thumbnail: "/itday/cover.webp",
    },
    {
      id: 9,
      title: "LEAP Launch 2024",
      thumbnail: "/leap/cover.jpg",
    },
    {
      id: 10,
      title: "CIBEX Expo 2024",
      thumbnail: "/cibex/cover.webp",
    },
    {
      id: 11,
      title: "World Media Day",
      thumbnail: "/worldmediaday/cover.jpg",
    },
    {
      id: 12,
      title: "BFSI Summit",
      thumbnail: "/bfsi/cover.webp",
    },
    {
      id: 13,
      title: "Huawei EA Fusionsolar",
      thumbnail: "/huaweieafusionsolar/cover.webp",
    },
    {
      id: 14,
      title: "Food Packaging & Processing Expo",
      thumbnail: "/food/cover.webp",
    },
    {
      id: 15,
      title: "Safaricom Mpesa Refresh Gala Dinner",
      thumbnail: "/safmpesa/cover.webp",
    },
    {
      id: 16,
      title: "Afralti Training Centre Opening",
      thumbnail: "/afralti/cover.webp",
    },
    {
      id: 17,
      title: "EA Fusionsolar Summit",
      thumbnail: "/eafusionsolar/cover.jpg",
    },
    {
      id: 18,
      title: "Huawei D&S",
      thumbnail: "/huaweids/cover.webp",
    },
    {
      id: 19,
      title: "Asian BBQ Fest",
      thumbnail: "/asianbbq/cover.jpg",
    },
    {
      id: 20,
      title: "Huawei ERM",
      thumbnail: "/huaweierm/cover.jpg",
    },
    {
      id: 21,
      title: "Huawei ICT Dinner",
      thumbnail: "/huawei-ict-dinner/cover.jpg",
    },
    {
      id: 22,
      title: "Letshego Leadership Conference",
      thumbnail: "/letshego/cover.jpg",
    },
    // Add more collections as needed
  ];

  return (
    <>
      <div className="bg-slate-200">
        <div className="p-6 mx-auto">
          <div className="py-2">
            <h1 className="text-center text-gray-700 text-4xl">Our Gallery</h1>
          </div>

          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/gallery/${collection.id}`}
                className="block"
              >
                <article className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                  <div className="relative mb-4 rounded-2xl">
                    <Image
                      width={400}
                      height={400}
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src={collection.thumbnail}
                      alt={collection.title}
                    />
                    <h2 className="mt-4 green text-xl font-semibold">
                      {collection.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      View event image collection
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
