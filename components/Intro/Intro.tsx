import Link from 'next/link'
import React from 'react'
import Video from '../Media/Video'

const Intro = () => {
  return (
    <>
        <h3 className='text-center md:px-32 md:pt-24 md:mb-10 p-4 pt-10 md:text-4xl text-lg'>
            At iVENTS, we <span className='text-green-600'>envision</span> a future whereby every event we touch 
            becomes a benchmark of excellence, setting the standard for exceptional events
            management solutions.
        </h3>

        <div className='text-center justify-items-center md:px-10 p-4'>
            <Video />
        </div>
        

        <div className='mb-10 md:px-32'>
            <div className='flex row justify-start md:gap-10 gap-4 md:px-10 px-4 py-4'>
                <h3 className='md:text-2xl text-base'>iVENTS by <span className='text-amber-400'>GEiCO</span></h3>
                <Link href="/" className='bg-lime-600 md:px-3 px-2 py-0 flex flex-col rounded justify-center text-center items-center text-sm'>
                    OUR COMPANY PROFILE
                </Link>
            </div>

            <p className='md:px-10 px-4 py-2'>
                Approaching two decades of experience in the events industry, we are a seasoned one-stop-shop
                catering to local and international clients with a track record of providing efficient, seamless
                and top-tier solutions. Based in Nairobi Kenya, with occasional assignments not only in East & Central
                Africa but also in other countries beyong the region. iVENTS' proficiency in the planning, management and execution
                of conferences, exhibitions and coorporate events is unrivaled.
            </p>
        </div>
    </>
  )
}

export default Intro