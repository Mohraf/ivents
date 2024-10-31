import React from 'react'
import "./services.css"
import Link from 'next/link';

const Services = () => {
    const services = [
        {
          id: 1,
          img: "/audio.jpg",
          description: "AUDIO & VISUAL",
          link: "/audioAndVisual",
        },
        {
          id: 2,
          img: "/conference.jpg",
          description: "CONFERENCES & EXHIBITIONS",
          link: "/conferencesAndExhibitions",
        },
        {
          id: 3,
          img: "/stage.jpg",
          description: "STAGE & LIGHTING",
          link: "/stageAndLighting",
        },
        {
          id: 4,
          img: "/printing.jpg",
          description: "PRINTING & BRANDING",
          link: "/printingAndBranding",
        },
        {
          id: 5,
          img: "/products.jpg",
          description: "PRODUCTS & LAUNCHES",
          link: "/productLaunches",
        },
      ];

  return (
    <div className='bg-slate-200 min-h-96'>
        <div className='flex flex-col justify-center md:h-[80vh] h-48 bg-slate-500 text-black bg-opacity-70 bg-center bg-cover bg-no-repeat'>
            <h3 className='md:px-32 px-4 md:font-semibold md:text-3xl text-xl font-light md:text-start text-center'>Our Services</h3>
            <h4 className='md:px-32 px-4 md:font-normal md:text-2xl text-lg font-thin md:text-start text-center'>We offer a wide range of services</h4>
        </div>
        <div className='md:px-32 px-4 py-10 text-black text-center'>
            <h3>OUR EXPERTISE</h3>
            <h4 className='mt-2 text-green-900 text-2xl'>We Offer A Wide Range Of Services</h4>
            
            <div className="mt-8 block">
                <div className="flex flex-row flex-wrap justify-between mx-auto">
                    {services.map((service) => (
                        <Link 
                            key={service.id}
                            href={service.link}
                            className='rounded-lg p-4 text-white w-[48%] h-[20vh] bg-center bg-cover bg-no-repeat'
                            style={{
                                backgroundImage: `url(${service.img})`
                            }}
                        >
                            <h4>{service.description}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services