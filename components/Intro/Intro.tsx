import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <>
        <h3 className='text-center md:p-10 p-4'>
            At iVENTS, we <span className='text-green-600'>envision</span> a future whereby every event we touch 
            becomes a benchmark of excellence, setting the standard for exceptional events
            management solutions.
        </h3>

        <div className='text-center'>
            Video
        </div>

        <div className='mb-10'>
            <div className='flex row justify-start gap-10 md:px-10 px-4 py-4'>
                <h3>iVENTS by <span className='text-amber-400'>GEiCO</span></h3>
                <Link href="/" className='bg-green-600 md:px-3 px-2 rounded justify-center text-center items-center'>OUR COMPANY PROFILE</Link>
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