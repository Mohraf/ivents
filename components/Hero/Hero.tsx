import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-96'>
        <div className="md:px-32 px-4 flex flex-col text-white bg-black bg-opacity-70 justify-center gap-10 h-[92vh]">
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
                    I For Detail.
                </h5>
                <p className='font-semibold text-2xl'>
                    Your Event  |  Our Canvas
                </p>
                </div>
                <div className='flex gap-10 my-4 md:flex-row flex-col'>
                    <Link
                     href="/services"
                     className='p-4 bg-lime-400 rounded-lg bg-opacity-60 border'
                    >
                        Book Your Experience
                    </Link>

                    <Link
                     href="/howWeDoIt"
                     className='p-4 bg-lime-600 rounded-lg bg-transparent border'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
        <div className='video-bg-section h-full w-full  absolute left-0 top-0 z-[-1]'>
            <video 
                className='w-full h-full object-cover absolute left-0 top-0 z-[-1] overflow-hidden' 
                autoPlay
                loop
                width="725"
                src="/ivents-our-story-video.mp4"
            >
            </video>            
        </div>
    </div>
  )
}

export default Hero