import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const collections = [
    {
      id: 1,
      title: "Huawei Media Entertainment Summit Cloud Event",
      thumbnail: "/huawei1/huawei1-1.jpg",
      images: [
        {
          id: 1,
          image: "/huawei1/huawei1-1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-10.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-11.jpg",
          comment: "Description for image 2",
        },
        {
          id: 2,
          image: "/huawei1/huawei1-12.jpg",
          comment: "Description for image 2",
        }
        // Add more images to this collection
      ],
    },
    {
      id: 2,
      title: "Huawei ICT Competition 2024",
      thumbnail: "/huawei-ict-24/huaict24-1.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-ict-24/huaict24-1.jpg",
          comment: "Description for image 3",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        // Add more images to this collection
      ],
    },
    // Add more collections as needed
  ];

  return (
    <>
      <div className="bg-slate-200">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-gray-700 text-4xl">Our Gallery</h1>
            <p className="text-xl green text-center mt-5">
              Take a Look at Our Latest Events
            </p>
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
                      View image collection
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
