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
    {
      id: 4,
      title: "Huawei IT Day 2024",
      thumbnail: "/huawei-it/huait1.jpg",
      images: [
        {
          id: 1,
          image: "/huawei-it/huait1.jpg",
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
      thumbnail: "/gn-hearing/gn1.jpg",
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
        {
          id: 11,
          image: "/gn-hearing/gn11.jpg",
          comment: "Description for image 2",
        },
        {
          id: 12,
          image: "/gn-hearing/gn12.jpg",
          comment: "Description for image 2",
        },
        {
          id: 13,
          image: "/gn-hearing/gn13.jpg",
          comment: "Description for image 2",
        },
        {
          id: 14,
          image: "/gn-hearing/gn14.jpg",
          comment: "Description for image 2",
        },
        {
          id: 15,
          image: "/gn-hearing/gn15.jpg",
          comment: "Description for image 2",
        },
        {
          id: 16,
          image: "/gn-hearing/gn16.jpg",
          comment: "Description for image 2",
        },
        {
          id: 17,
          image: "/gn-hearing/gn17.jpg",
          comment: "Description for image 2",
        },
        {
          id: 18,
          image: "/gn-hearing/gn18.jpg",
          comment: "Description for image 2",
        },
        {
          id: 19,
          image: "/gn-hearing/gn19.jpg",
          comment: "Description for image 2",
        },
        {
          id: 20,
          image: "/gn-hearing/gn20.jpg",
          comment: "Description for image 2",
        },
        {
          id: 21,
          image: "/gn-hearing/gn21.jpg",
          comment: "Description for image 2",
        },
        {
          id: 22,
          image: "/gn-hearing/gn22.jpg",
          comment: "Description for image 2",
        },
        {
          id: 23,
          image: "/gn-hearing/gn23.jpg",
          comment: "Description for image 2",
        },
        {
          id: 24,
          image: "/gn-hearing/gn24.jpg",
          comment: "Description for image 2",
        },
        {
          id: 25,
          image: "/gn-hearing/gn25.jpg",
          comment: "Description for image 2",
        },
        {
          id: 26,
          image: "/gn-hearing/gn26.jpg",
          comment: "Description for image 2",
        },
        {
          id: 27,
          image: "/gn-hearing/gn27.jpg",
          comment: "Description for image 2",
        },
        {
          id: 28,
          image: "/gn-hearing/gn28.jpg",
          comment: "Description for image 2",
        },
        {
          id: 29,
          image: "/gn-hearing/gn29.jpg",
          comment: "Description for image 2",
        },
        {
          id: 30,
          image: "/gn-hearing/gn30.jpg",
          comment: "Description for image 2",
        },
        {
          id: 31,
          image: "/gn-hearing/gn31.jpg",
          comment: "Description for image 2",
        },
        {
          id: 32,
          image: "/gn-hearing/gn32.jpg",
          comment: "Description for image 2",
        },
        {
          id: 33,
          image: "/gn-hearing/gn33.jpg",
          comment: "Description for image 2",
        },
        {
          id: 34,
          image: "/gn-hearing/gn34.jpg",
          comment: "Description for image 2",
        },
        {
          id: 35,
          image: "/gn-hearing/gn35.jpg",
          comment: "Description for image 2",
        },
        {
          id: 36,
          image: "/gn-hearing/gn36.jpg",
          comment: "Description for image 2",
        },
        {
          id: 37,
          image: "/gn-hearing/gn37.jpg",
          comment: "Description for image 2",
        },
        {
          id: 38,
          image: "/gn-hearing/gn38.jpg",
          comment: "Description for image 2",
        },
        {
          id: 39,
          image: "/gn-hearing/gn39.jpg",
          comment: "Description for image 2",
        },
        {
          id: 40,
          image: "/gn-hearing/gn40.jpg",
          comment: "Description for image 2",
        },
        {
          id: 41,
          image: "/gn-hearing/gn41.jpg",
          comment: "Description for image 2",
        },
        {
          id: 42,
          image: "/gn-hearing/gn42.jpg",
          comment: "Description for image 2",
        },
        {
          id: 43,
          image: "/gn-hearing/gn43.jpg",
          comment: "Description for image 2",
        },
        {
          id: 44,
          image: "/gn-hearing/gn44.jpg",
          comment: "Description for image 2",
        },
        {
          id: 45,
          image: "/gn-hearing/gn45.jpg",
          comment: "Description for image 2",
        },
        {
          id: 46,
          image: "/gn-hearing/gn46.jpg",
          comment: "Description for image 2",
        },
        {
          id: 47,
          image: "/gn-hearing/gn47.jpg",
          comment: "Description for image 2",
        },
        {
          id: 48,
          image: "/gn-hearing/gn48.jpg",
          comment: "Description for image 2",
        },
        {
          id: 49,
          image: "/gn-hearing/gn49.jpg",
          comment: "Description for image 2",
        },
        {
          id: 50,
          image: "/gn-hearing/gn50.jpg",
          comment: "Description for image 2",
        },
        {
          id: 51,
          image: "/gn-hearing/gn51.jpg",
          comment: "Description for image 2",
        },
        {
          id: 52,
          image: "/gn-hearing/gn52.jpg",
          comment: "Description for image 2",
        },
        {
          id: 53,
          image: "/gn-hearing/gn53.jpg",
          comment: "Description for image 2",
        },
        {
          id: 54,
          image: "/gn-hearing/gn54.jpg",
          comment: "Description for image 2",
        },
        {
          id: 55,
          image: "/gn-hearing/gn55.jpg",
          comment: "Description for image 2",
        },
        {
          id: 56,
          image: "/gn-hearing/gn56.jpg",
          comment: "Description for image 2",
        },
        {
          id: 57,
          image: "/gn-hearing/gn57.jpg",
          comment: "Description for image 2",
        },
        {
          id: 58,
          image: "/gn-hearing/gn58.jpg",
          comment: "Description for image 2",
        },
        {
          id: 59,
          image: "/gn-hearing/gn59.jpg",
          comment: "Description for image 2",
        },
        {
          id: 60,
          image: "/gn-hearing/gn60.jpg",
          comment: "Description for image 2",
        },
        {
          id: 61,
          image: "/gn-hearing/gn61.jpg",
          comment: "Description for image 2",
        },
        {
          id: 62,
          image: "/gn-hearing/gn62.jpg",
          comment: "Description for image 2",
        },
        {
          id: 63,
          image: "/gn-hearing/gn63.jpg",
          comment: "Description for image 2",
        },
        {
          id: 64,
          image: "/gn-hearing/gn64.jpg",
          comment: "Description for image 2",
        },
        {
          id: 65,
          image: "/gn-hearing/gn65.jpg",
          comment: "Description for image 2",
        },
        {
          id: 66,
          image: "/gn-hearing/gn66.jpg",
          comment: "Description for image 2",
        },
        {
          id: 67,
          image: "/gn-hearing/gn67.jpg",
          comment: "Description for image 2",
        },
        {
          id: 68,
          image: "/gn-hearing/gn68.jpg",
          comment: "Description for image 2",
        },
        {
          id: 69,
          image: "/gn-hearing/gn69.jpg",
          comment: "Description for image 2",
        },
        {
          id: 70,
          image: "/gn-hearing/gn70.jpg",
          comment: "Description for image 2",
        },
        {
          id: 71,
          image: "/gn-hearing/gn71.jpg",
          comment: "Description for image 2",
        },
        {
          id: 72,
          image: "/gn-hearing/gn72.jpg",
          comment: "Description for image 2",
        },
        {
          id: 73,
          image: "/gn-hearing/gn73.jpg",
          comment: "Description for image 2",
        },
        {
          id: 74,
          image: "/gn-hearing/gn74.jpg",
          comment: "Description for image 2",
        },
        {
          id: 75,
          image: "/gn-hearing/gn75.jpg",
          comment: "Description for image 2",
        },
        {
          id: 76,
          image: "/gn-hearing/gn76.jpg",
          comment: "Description for image 2",
        },
        {
          id: 77,
          image: "/gn-hearing/gn77.jpg",
          comment: "Description for image 2",
        },
        {
          id: 78,
          image: "/gn-hearing/gn78.jpg",
          comment: "Description for image 2",
        },
        {
          id: 79,
          image: "/gn-hearing/gn79.jpg",
          comment: "Description for image 2",
        },
        {
          id: 80,
          image: "/gn-hearing/gn80.jpg",
          comment: "Description for image 2",
        },
        {
          id: 81,
          image: "/gn-hearing/gn81.jpg",
          comment: "Description for image 2",
        },
        {
          id: 82,
          image: "/gn-hearing/gn82.jpg",
          comment: "Description for image 2",
        },
        {
          id: 83,
          image: "/gn-hearing/gn83.jpg",
          comment: "Description for image 2",
        },
        {
          id: 84,
          image: "/gn-hearing/gn84.jpg",
          comment: "Description for image 2",
        },
        {
          id: 85,
          image: "/gn-hearing/gn85.jpg",
          comment: "Description for image 2",
        },
        {
          id: 86,
          image: "/gn-hearing/gn86.jpg",
          comment: "Description for image 2",
        },
        {
          id: 87,
          image: "/gn-hearing/gn87.jpg",
          comment: "Description for image 2",
        },
        // Add more images to this collection
      ],
    },
    {
      id: 6,
      title: "Pan Africa BESS Summit",
      thumbnail: "/bess/bess1.jpg",
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
      thumbnail: "/cmg/cmg1.jpg",
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
      thumbnail: "/itday/itday1.jpg",
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
      thumbnail: "/leap/leap1.jpg",
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
