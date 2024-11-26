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
          id: 3,
          image: "/huawei1/huawei1-3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei1/huawei1-4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei1/huawei1-5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei1/huawei1-6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei1/huawei1-7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/huawei1/huawei1-8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/huawei1/huawei1-9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/huawei1/huawei1-10.jpg",
          comment: "Description for image 2",
        },
        {
          id: 11,
          image: "/huawei1/huawei1-11.jpg",
          comment: "Description for image 2",
        },
        {
          id: 12,
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
          id: 2,
          image: "/huawei-ict-24/huaict24-2.jpg",
          comment: "Description for image 4",
        },
        {
          id: 3,
          image: "/huawei-ict-24/huaict24-3.jpg",
          comment: "Description for image 4",
        },
        {
          id: 4,
          image: "/huawei-ict-24/huaict24-4.jpg",
          comment: "Description for image 4",
        },
        {
          id: 5,
          image: "/huawei-ict-24/huaict24-5.jpg",
          comment: "Description for image 4",
        },
        {
          id: 6,
          image: "/huawei-ict-24/huaict24-6.jpg",
          comment: "Description for image 4",
        },
        {
          id: 7,
          image: "/huawei-ict-24/huaict24-7.jpg",
          comment: "Description for image 4",
        },
        {
          id: 8,
          image: "/huawei-ict-24/huaict24-8.jpg",
          comment: "Description for image 4",
        },
        {
          id: 9,
          image: "/huawei-ict-24/huaict24-9.jpg",
          comment: "Description for image 4",
        },
        {
          id: 10,
          image: "/huawei-ict-24/huaict24-10.jpg",
          comment: "Description for image 4",
        },
        {
          id: 11,
          image: "/huawei-ict-24/huaict24-11.jpg",
          comment: "Description for image 4",
        },
        {
          id: 12,
          image: "/huawei-ict-24/huaict24-12.jpg",
          comment: "Description for image 4",
        },
        {
          id: 13,
          image: "/huawei-ict-24/huaict24-13.jpg",
          comment: "Description for image 4",
        },
        {
          id: 14,
          image: "/huawei-ict-24/huaict24-14.jpg",
          comment: "Description for image 4",
        },
        {
          id: 15,
          image: "/huawei-ict-24/huaict24-15.jpg",
          comment: "Description for image 4",
        },
        {
          id: 16,
          image: "/huawei-ict-24/huaict24-16.jpg",
          comment: "Description for image 4",
        },
        {
          id: 17,
          image: "/huawei-ict-24/huaict24-17.jpg",
          comment: "Description for image 4",
        },
        {
          id: 18,
          image: "/huawei-ict-24/huaict24-18.jpg",
          comment: "Description for image 4",
        },
        {
          id: 19,
          image: "/huawei-ict-24/huaict24-19.jpg",
          comment: "Description for image 4",
        },
        {
          id: 20,
          image: "/huawei-ict-24/huaict24-20.jpg",
          comment: "Description for image 4",
        },
        {
          id: 21,
          image: "/huawei-ict-24/huaict24-21.jpg",
          comment: "Description for image 4",
        },
        {
          id: 22,
          image: "/huawei-ict-24/huaict24-22.jpg",
          comment: "Description for image 4",
        },
        {
          id: 23,
          image: "/huawei-ict-24/huaict24-23.jpg",
          comment: "Description for image 4",
        },
        {
          id: 24,
          image: "/huawei-ict-24/huaict24-24.jpg",
          comment: "Description for image 4",
        },
        {
          id: 25,
          image: "/huawei-ict-24/huaict24-25.jpg",
          comment: "Description for image 4",
        },
        {
          id: 26,
          image: "/huawei-ict-24/huaict24-26.jpg",
          comment: "Description for image 4",
        },
        {
          id: 27,
          image: "/huawei-ict-24/huaict24-27.jpg",
          comment: "Description for image 4",
        },
        {
          id: 28,
          image: "/huawei-ict-24/huaict24-28.jpg",
          comment: "Description for image 4",
        },
        {
          id: 29,
          image: "/huawei-ict-24/huaict24-29.jpg",
          comment: "Description for image 4",
        },
        {
          id: 30,
          image: "/huawei-ict-24/huaict24-30.jpg",
          comment: "Description for image 4",
        },
        {
          id: 31,
          image: "/huawei-ict-24/huaict24-31.jpg",
          comment: "Description for image 4",
        },
        {
          id: 32,
          image: "/huawei-ict-24/huaict24-32.jpg",
          comment: "Description for image 4",
        },
        {
          id: 33,
          image: "/huawei-ict-24/huaict24-33.jpg",
          comment: "Description for image 4",
        },
        {
          id: 34,
          image: "/huawei-ict-24/huaict24-34.jpg",
          comment: "Description for image 4",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 3,
      title: "Huawei IP and Optix 2024",
      thumbnail: "/huawei-ip/huaip1.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-ip/huaip1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/huawei-ip/huaip2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-ip/huaip3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-ip/huaip4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-ip/huaip5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-ip/huaip6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-ip/huaip7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/huawei-ip/huaip8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/huawei-ip/huaip9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/huawei-ip/huaip10.jpg",
          comment: "Description for image 2",
        },
        {
          id: 11,
          image: "/huawei-ip/huaip11.jpg",
          comment: "Description for image 2",
        },
        {
          id: 12,
          image: "/huawei-ip/huaip12.jpg",
          comment: "Description for image 2",
        },
        {
          id: 13,
          image: "/huawei-ip/huaip13.jpg",
          comment: "Description for image 2",
        },
        {
          id: 14,
          image: "/huawei-ip/huaip14.jpg",
          comment: "Description for image 2",
        },
        {
          id: 15,
          image: "/huawei-ip/huaip15.jpg",
          comment: "Description for image 2",
        },
        {
          id: 16,
          image: "/huawei-ip/huaip16.jpg",
          comment: "Description for image 2",
        }
        // Add more images to this collection
      ],
    },
    // ... other collections
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
    <div className="container mx-auto px-4 py-8 bg-slate-100">
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