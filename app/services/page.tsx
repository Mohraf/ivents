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
        <div style={{backgroundImage: "url('/sprinkles.jpg')"}} className='flex flex-col justify-center md:h-[72vh] h-48 bg-slate-500 bg-opacity-70 bg-center bg-cover bg-no-repeat'>
            <h3 className='md:px-32 px-4 md:font-semibold md:text-3xl text-xl font-light md:text-start text-center'>Our Services</h3>
            <h4 className='md:px-32 px-4 md:font-normal md:text-2xl text-lg font-thin md:text-start text-center'>We offer a wide range of services</h4>
        </div>
        <div className='md:px-32 px-4 py-16 text-black text-center'>
            <h3 className='md:font-extralight md:text-lg'>OUR EXPERTISE</h3>
            <h4 className='mt-2 text-green-900 md:text-4xl md:font-thin text-2xl'>We Offer A Wide Range Of Services</h4>
            
            {/* <div className="mt-8 block">
                <div className="flex flex-row flex-wrap justify-between mx-auto">
                    {services.map((service) => (
                        <Link 
                            key={service.id}
                            href={service.link}
                            className='w-[48%] h-[20vh] md:w-[33%] flex flex-col justify-end bg-slate-400 mb-4 bg-opacity-70 rounded-lg p-4 text-white bg-center bg-cover bg-no-repeat'
                            style={{
                                backgroundImage: `url(${service.img})`
                            }}
                        >
                            <h4 className='text-sm text-light p-1 bg-slate-500 justify-center rounded-lg bg-opacity-40'>
                                {service.description}
                            </h4>
                        </Link>
                    ))}
                </div>
            </div> */}


            <div className='lg:block mt-0'>
              <div className='services-row relative bottom-[-8.5rem] xl:bottom-[-8.5rem] lg:bottom-[-3.5rem] md:bottom-[-2rem] flex flex-row justify-center mx-auto gap-4'>
                <Link
                  href="{service.link}"
                  className='service-box relative rounded-[20px] h-[43vh] w-[31%] lg:w-[32%] bg-center bg-no-repeat bg-cover aos-init aos-animate'
                  style={{
                      backgroundImage: "url('/audio.jpg')"
                  }}
                >
                  <h4 className='text-lg absolute service-upper-head  service-head top-[2rem] left-[2rem] text-white text-left'>Audio and Visual</h4>
                </Link>

                <Link
                  href="{service.link}"
                  className='service-box relative rounded-[20px] h-[43vh] w-[31%] lg:w-[32%] bg-center bg-no-repeat bg-cover aos-init aos-animate'
                  style={{
                      backgroundImage: "url('/stage.jpg')"
                  }}
                >
                  <h4 className='text-lg absolute service-upper-head  service-head bottom-[7rem] left-[2rem] text-white text-left'>Stage and Lighting</h4>
                </Link>

              </div>
              <div className='services-row mt-[1.7rem] flex flex-row justify-center mx-auto'>
                <Link
                  className='service-box relative rounded-[20px] h-[50vh] w-1/4 bg-center bg-no-repeat bg-cover aos-init aos-animate'
                  href=""
                  style={{
                    backgroundImage: "url('/conference.jpg')"
                  }}
                >
                  <h4 className='text-lg absolute bottom-[3rem] service-below-head service-head left-[2rem] text-black text-left'>Conferences And Exhibitions</h4>
                </Link>

                <Link
                 className='service-box relative rounded-[20px] mt-[9%] bg-contain bg-no-repeat bg-center w-1/4 ml-6 aos-init aos-animate'
                 href=''
                 style={{
                  backgroundImage: "url('/printing.jpg')"
                 }}
                >
                  <h4 className='text-lg absolute text-white service-below-head  service-head-v2 bottom-[6rem] left-[2rem] text-left'>Printing and Branding</h4>
                </Link>

                <Link
                  className='service-box relative rounded-[20px] min-h-[50vh] bg-cover bg-no-repeat bg-center w-1/4 ml-6 cursor-pointer aos-init aos-animate'
                  href=""
                  style={{
                    backgroundImage: "url('/products.jpg')"
                   }}
                >
                  <h4 className='text-lg absolute text-black service-below-head   bottom-[3rem] service-head left-[2rem] text-left'>Products And Launches</h4>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services