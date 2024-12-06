import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[calc(100vh-60px)] relative'>
        <div className="md:px-32 px-4 flex flex-col text-white bg-black bg-opacity-60 justify-center gap-32 h-full">
            <div className='my-4 md:text-start text-center'>
                <h3 className='font-thin md:text-7xl text-3xl'>
                    We Deliver
                </h3>

                <h4 className='font-semibold md:text-6xl text-2xl'>
                    Ideas to Reality, One Event at a time
                </h4>
            </div>

            <div className='my-4 md:text-start text-center'>
                <div className='md:flex md:flex-row flex-col gap-4'>
                <h5 className='text-2xl'>
                    with an i for Detail.
                </h5>
                <p className='font-semibold md:text-2xl text-xl'>
                    Your Event  |  Our Canvas
                </p>
                </div>
                <div className='flex gap-10 my-4 md:flex-row flex-col'>
                    <Link
                     href="/contact"
                     className='p-4 bg-lime-400 rounded-lg bg-opacity-60 border'
                    >
                        Book your iventful Experience
                    </Link>

                    <Link
                     href="/about"
                     className='p-4 bg-lime-600 rounded-lg bg-transparent border'
                    >
                        Who We Are
                    </Link>
                </div>
            </div>
        </div>
        <div className='video-bg-section h-full w-full  absolute left-0 top-0 z-[-1]'>
            <video 
                className='w-full h-full object-cover absolute left-0 top-0 z-[-1] overflow-hidden' 
                preload='auto'
                autoPlay
                loop
                muted
                width="725"
                src="/slideshow.webm"
            >
            </video>            
        </div>
    </div>
  )
}

export default Hero