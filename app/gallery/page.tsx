import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const data = [
    {
      id: 1,
      link: "add link here",
      image:
        "/gallery1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      id: 2,
      link: "add link here",
      image:
        "/gallery2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      id: 3,
      link: "add link here",
      image:
        "/gallery3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      id: 4,
      link: "add link here",
      image:
        "/gallery4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      id: 5,
      link: "add link here",
      image:
        "/gallery5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      id: 6,
      link: "add link here",
      image:
        "/gallery6.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 7,
      link: "add link here",
      image:
        "/gallery7.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 8,
      link: "add link here",
      image:
        "/gallery8.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 9,
      link: "add link here",
      image:
        "/gallery9.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 10,
      link: "add link here",
      image:
        "/gallery10.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 11,
      link: "add link here",
      image:
        "/gallery11.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 12,
      link: "add link here",
      image:
        "/gallery12.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    // {
    //   id: 13,
    //   link: "add link here",
    //   image:
    //     "/gallery13.jpg",
    //   comment: `you can add text with html tag <b>like this  </b>`,
    // },
    // {
    //   id: 14,
    //   link: "add link here",
    //   image:
    //     "/gallery14.jpg",
    //   comment: `you can add text with html tag <b>like this  </b>`,
    // },
    {
      id: 15,
      link: "add link here",
      image:
        "/gallery15.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 16,
      link: "add link here",
      image:
        "/gallery16.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 17,
      link: "add link here",
      image:
        "/gallery17.jpg",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      id: 18,
      link: "add link here",
      image:
        "/gallery18.png",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
  ];
  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl text-white">Our Gallery</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => {
              return (
                  <article
                    key={x.id}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <Link
                      href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      {/* <Link
                        className="flex justify-center items-center bg-lime-200 bg-opacity-30  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </Link> */}
                    </div>
                    {/* <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-lime-500 transition-colors duration-200"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3> */}
                  </article>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;