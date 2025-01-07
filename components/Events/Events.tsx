import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Event = {
    name: string
    date: string
    location: string
    images: string[]
}

const event: Event = {
    name: 'Huawei Media Entertainment Summit Cloud Event',
    date: '13/12/2024',
    location: 'Nairobi, Kenya',
    images: [
        '/huawei1/1.jpg',
        '/huawei1/2.jpg',
        '/huawei1/3.jpg',
        '/huawei1/4.jpg',
        '/huawei1/5.jpg',
        '/huawei1/6.jpg',
        '/huawei1/7.webp',    
    ]
}

const Events = () => {
  return (
    <div className='bg-slate-200 md:py-12 py-6 px-4'>
        <h3 className='md:px-32 py-10 text-gray-600'>Our Most Recent Event</h3>

        <div className='flex flex-col md:flex-row md:px-32'>
            <div className='md:w-1/3'>
                <Image
                    src='/huawei1/1.jpg'
                    width={500}
                    height={1000} 
                    alt='event' 
                    className='w-full h-full object-cover object-center rounded-lg' 
                />
            </div>
            <div className='md:w-2/3 md:px-10'>
                <h2 className='text-2xl font-bold text-black'>{event.name}</h2>
                <p className='text-gray-600'>Date: {event.date}</p>
                <p className='text-gray-600 mb-10'>Location: {event.location}</p>
                <Link href='/gallery/1' className='bggreen text-white hover:bg-lime-600 px-4 p-2 rounded-lg'>View Event</Link>

                <div id='event-slideshow' className='flex flex-wrap mt-5'>
                    {event.images.map((image, index) => (
                        <div key={index} className='w-1/2 md:w-1/4 p-2'>
                            <Image 
                                width={500} 
                                height={500} 
                                src={image} 
                                alt='event' 
                                className='w-full h-32 object-cover rounded-lg' 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events