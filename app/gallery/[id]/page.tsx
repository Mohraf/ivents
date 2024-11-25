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
      title: "Collection 1",
      thumbnail: "/gallery1.jpg",
      images: [
        {
          id: 1,
          image: "/gallery1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/gallery2.jpg",
          comment: "Description for image 2",
        },
      ],
    },
    {
        id: 2,
        title: "Collection 2",
        thumbnail: "/gallery3.jpg",
        images: [
          {
            id: 3,
            image: "/gallery3.jpg",
            comment: "Description for image 3",
          },
          {
            id: 4,
            image: "/gallery4.jpg",
            comment: "Description for image 4",
          },
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
        <p className="text-white mt-2 text-center">{image.comment}</p>
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