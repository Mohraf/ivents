import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const collections = [
    {
      id: 1,
      title: "Huawei Media Entertainment Summit Cloud Event",
      thumbnail: "/huawei1/cover.jpg",
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
      thumbnail: "/huawei-ict-24/cover.jpg",
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
    {
      id: 3,
      title: "Huawei IP and Optix 2024",
      thumbnail: "/huawei-ip/cover.jpg",
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
          image: "/huawei-it/huait2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/huawei-it/huait3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/huawei-it/huait4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/huawei-it/huait5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/huawei-it/huait6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/huawei-it/huait7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/huawei-it/huait8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/huawei-it/huait9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/huawei-it/huait10.jpg",
          comment: "Description for image 2",
        },
        {
          id: 11,
          image: "/huawei-it/huait11.jpg",
          comment: "Description for image 2",
        },
        {
          id: 12,
          image: "/huawei-it/huait12.jpg",
          comment: "Description for image 2",
        },
        {
          id: 13,
          image: "/huawei-it/huait13.jpg",
          comment: "Description for image 2",
        },
        {
          id: 14,
          image: "/huawei-it/huait14.jpg",
          comment: "Description for image 2",
        },
        {
          id: 15,
          image: "/huawei-it/huait15.jpg",
          comment: "Description for image 2",
        },
        {
          id: 16,
          image: "/huawei-it/huait16.jpg",
          comment: "Description for image 2",
        },
        {
          id: 17,
          image: "/huawei-it/huait17.jpg",
          comment: "Description for image 2",
        },
        {
          id: 18,
          image: "/huawei-it/huait18.jpg",
          comment: "Description for image 2",
        },
        {
          id: 19,
          image: "/huawei-it/huait19.jpg",
          comment: "Description for image 2",
        },
        {
          id: 20,
          image: "/huawei-it/huait20.jpg",
          comment: "Description for image 2",
        },
        {
          id: 21,
          image: "/huawei-it/huait21.jpg",
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
          image: "/gn-hearing/gn1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/gn-hearing/gn2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/gn-hearing/gn3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/gn-hearing/gn4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/gn-hearing/gn5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/gn-hearing/gn6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/gn-hearing/gn7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/gn-hearing/gn8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/gn-hearing/gn9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/gn-hearing/gn10.jpg",
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
          image: "/bess/bess1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/bess/bess2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/bess/bess3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/bess/bess4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/bess/bess5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/bess/bess6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/bess/bess7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/bess/bess8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/bess/bess9.jpg",
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
          image: "/cmg/cmg1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cmg/cmg2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cmg/cmg3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cmg/cmg4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cmg/cmg5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cmg/cmg6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cmg/cmg7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cmg/cmg8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cmg/cmg9.jpg",
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
          image: "/itday/itday1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/itday/itday2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/itday/itday3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/itday/itday4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/itday/itday5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/itday/itday6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/itday/itday7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/itday/itday8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/itday/itday9.jpg",
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
          image: "/leap/leap1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/leap/leap2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/leap/leap3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/leap/leap4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/leap/leap5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/leap/leap6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/leap/leap7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/leap/leap8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/leap/leap9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/leap/leap10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 10,
      title: "CIBEX Expo 2024",
      thumbnail: "/cibex/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 12,
      title: "BFSI Summit",
      thumbnail: "/bfsi/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 13,
      title: "Huawei EA Fusionsolar",
      thumbnail: "/huaweieafusionsolar/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 14,
      title: "Food Packaging & Processing Expo",
      thumbnail: "/food/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 15,
      title: "Safaricom Mpesa Refresh Gala Dinner",
      thumbnail: "/safmpesa/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 16,
      title: "Afralti Training Centre Opening",
      thumbnail: "/afralti/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 18,
      title: "Huawei D&S",
      thumbnail: "/huaweids/cover.jpg",
      images: [
        {
          id: 1,
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
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
          image: "/cibex/cibex1.jpg",
          comment: "Description for image 1",
        },
        {
          id: 2,
          image: "/cibex/cibex2.jpg",
          comment: "Description for image 2",
        },
        {
          id: 3,
          image: "/cibex/cibex3.jpg",
          comment: "Description for image 2",
        },
        {
          id: 4,
          image: "/cibex/cibex4.jpg",
          comment: "Description for image 2",
        },
        {
          id: 5,
          image: "/cibex/cibex5.jpg",
          comment: "Description for image 2",
        },
        {
          id: 6,
          image: "/cibex/cibex6.jpg",
          comment: "Description for image 2",
        },
        {
          id: 7,
          image: "/cibex/cibex7.jpg",
          comment: "Description for image 2",
        },
        {
          id: 8,
          image: "/cibex/cibex8.jpg",
          comment: "Description for image 2",
        },
        {
          id: 9,
          image: "/cibex/cibex9.jpg",
          comment: "Description for image 2",
        },
        {
          id: 10,
          image: "/cibex/cibex10.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    // Add more collections as needed
  ];

  return (
    <>
      <div className="bg-slate-200">
        <div className="p-6 mx-auto">
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
