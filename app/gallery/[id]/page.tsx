'use client';
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const CollectionPage = () => {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // This should ideally come from an API or database
  // For now, we'll use the same data structure as the main gallery page
  const collections = [
    {
      id: 1,
      title: "Huawei Media Entertainment Summit Cloud Event",
      thumbnail: "/huawei1/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huawei1/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei1/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei1/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei1/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei1/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei1/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei1/7.webp",
          comment: "Description for image 2",
        },        
        // Add more images to this collection
      ],
    },
    {
      id: 2,
      title: "Huawei ICT Competition 2024",
      thumbnail: "/huawei-ict-24/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-ict-24/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei-ict-24/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-ict-24/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-ict-24/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-ict-24/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-ict-24/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-ict-24/7.jpg",
          comment: "Description for image 2",
        },        
        // Add more images to this collection
      ],
    },
    {
      id: 3,
      title: "Huawei IP and Optix 2024",
      thumbnail: "/huawei-ip/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-ip/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei-ip/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-ip/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-ip/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-ip/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-ip/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-ip/7.jpg",
          comment: "Description for image 2",
        },
               
        // Add more images to this collection
      ],
    },
    {
      id: 4,
      title: "Huawei IT Day 2024",
      thumbnail: "/huawei-it/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-it/cover.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei-it/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-it/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-it/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-it/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-it/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-it/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 5,
      title: "GN Hearing",
      thumbnail: "/gn-hearing/cover.jpg",
      images: [
        {
          id: 1,
          image: "/gn-hearing/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/gn-hearing/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/gn-hearing/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/gn-hearing/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/gn-hearing/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/gn-hearing/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/gn-hearing/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 6,
      title: "Pan Africa BESS Summit",
      thumbnail: "/bess/cover.jpg",
      images: [
        {
          id: 1,
          image: "/bess/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/bess/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/bess/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/bess/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/bess/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/bess/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/bess/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 7,
      title: "China Media Group New Year",
      thumbnail: "/cmg/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cmg/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cmg/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cmg/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cmg/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cmg/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cmg/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cmg/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 8,
      title: "IT Day",
      thumbnail: "/itday/cover.webp",
      images: [
        {
          id: 1,
          image: "/itday/1.webp",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/itday/2.webp",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/itday/cover.webp",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/itday/4.webp",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/itday/5.webp",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/itday/6.webp",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/itday/7.webp",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/itday/8.webp",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 9,
      title: "LEAP Launch 2024",
      thumbnail: "/leap/cover.jpg",
      images: [
        {
          id: 1,
          image: "/leap/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/leap/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/leap/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/leap/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/leap/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/leap/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/leap/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 10,
      title: "CIBEX Expo 2024",
      thumbnail: "/cibex/cover.webp",
      images: [
        {
          id: 1,
          image: "/cibex/1.webp",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/2.webp",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/3.webp",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/4.webp",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/5.webp",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/6.webp",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/7.webp",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cover.webp",
          comment: "Description for image 1",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 11,
      title: "World Media Day",
      thumbnail: "/worldmediaday/cover.jpg",
      images: [
        {
          id: 1,
          image: "/worldmediaday/1.webp",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/worldmediaday/2.webp",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/worldmediaday/3.webp",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/worldmediaday/4.webp",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/worldmediaday/5.webp",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/worldmediaday/6.webp",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/worldmediaday/7.webp",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 12,
      title: "BFSI Summit",
      thumbnail: "/bfsi/cover.webp",
      images: [
        {
          id: 1,
          image: "/bfsi/1.webp",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/bfsi/2.webp",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/bfsi/3.webp",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/bfsi/4.webp",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/bfsi/5.webp",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/bfsi/6.webp",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/bfsi/7.webp",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/bfsi/cover.webp",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 13,
      title: "Huawei EA Fusionsolar",
      thumbnail: "/huaweieafusionsolar/cover.webp",
      images: [
        {
          id: 1,
          image: "/huaweieafusionsolar/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huaweieafusionsolar/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huaweieafusionsolar/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huaweieafusionsolar/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huaweieafusionsolar/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huaweieafusionsolar/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huaweieafusionsolar/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 14,
      title: "Food Packaging & Processing Expo",
      thumbnail: "/food/cover.webp",
      images: [
        {
          id: 1,
          image: "/food/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/food/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/food/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/food/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/food/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/food/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/food/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 15,
      title: "Safaricom Mpesa Refresh Gala Dinner",
      thumbnail: "/safmpesa/cover.webp",
      images: [
        {
          id: 1,
          image: "/safmpesa/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/safmpesa/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/safmpesa/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/safmpesa/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/safmpesa/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/safmpesa/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/safmpesa/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 16,
      title: "Afralti Training Centre Opening",
      thumbnail: "/afralti/cover.webp",
      images: [
        {
          id: 1,
          image: "/afralti/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/afralti/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/afralti/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/afralti/4.png",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/afralti/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/afralti/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/afralti/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 17,
      title: "EA Fusionsolar Summit",
      thumbnail: "/eafusionsolar/cover.jpg",
      images: [
        {
          id: 1,
          image: "/eafusionsolar/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/eafusionsolar/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/eafusionsolar/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/eafusionsolar/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/eafusionsolar/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/eafusionsolar/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/eafusionsolar/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 18,
      title: "Huawei D&S",
      thumbnail: "/huaweids/cover.webp",
      images: [
        {
          id: 1,
          image: "/huaweids/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huaweids/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huaweids/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huaweids/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huaweids/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huaweids/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huaweids/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 19,
      title: "Asian BBQ Fest",
      thumbnail: "/asianbbq/cover.jpg",
      images: [
        {
          id: 1,
          image: "/asianbbq/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/asianbbq/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/asianbbq/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/asianbbq/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/asianbbq/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/asianbbq/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/asianbbq/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 20,
      title: "Huawei ERM",
      thumbnail: "/huaweierm/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huaweierm/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huaweierm/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huaweierm/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huaweierm/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huaweierm/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huaweierm/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huaweierm/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 21,
      title: "Huawei ICT Dinner",
      thumbnail: "/huawei-ict-dinner/cover.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-ict-dinner/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei-ict-dinner/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-ict-dinner/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-ict-dinner/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-ict-dinner/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-ict-dinner/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-ict-dinner/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 22,
      title: "Letshego Leadership Conference",
      thumbnail: "/letshego/cover.jpg",
      images: [
        {
          id: 1,
          image: "/letshego/1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/letshego/2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/letshego/3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/letshego/4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/letshego/5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/letshego/6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/letshego/7.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    // Add more collections as needed
  ];

  const collection = collections.find(
    (c) => c.id === parseInt(params.id as string)
  );

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const ImageModal = ({ image, onClose }: { image: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-8 h-8 rounded-full"
        >
          ×
        </button>
        <Image
          src={image.image}
          alt={image.comment}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
        {/* <p className="text-white mt-2 text-center">{image.comment}</p> */}
      </div>
    </div>
  );

  return (
    <div className=" mx-auto px-4 py-8 bg-slate-100">
      <div className="mb-8">
        <Link
          href="/gallery"
          className="green hover:text-lime-600 mb-4 inline-block"
        >
          ← Back to Gallery
        </Link>
        <h1 className="text-3xl text-gray-600 font-bold">{collection.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collection.images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer group"
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={image.image}
                alt={image.comment}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={collection.images.find((img) => img.id === selectedImage)}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default CollectionPage;