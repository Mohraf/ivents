"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { events } from '@/lib/data/events'

type Event = {
    id: number
    title: string
    thumbnail: string
    images: {
        id: number
        image: string
        comment: string
    }[]
}

const getEventForCurrentPeriod = () => {
    // Get the current date
    const now = new Date()
    
    // Calculate the number of 2-week periods since the epoch
    const twoWeekPeriods = Math.floor(now.getTime() / (14 * 24 * 60 * 60 * 1000))
    
    // Use modulo to cycle through the events array
    const eventIndex = twoWeekPeriods % events.length
    
    return events[eventIndex]
}

const Events = () => {
    const [currentEvent, setCurrentEvent] = useState<Event>(getEventForCurrentPeriod())

    useEffect(() => {
        // Update the current event initially
        setCurrentEvent(getEventForCurrentPeriod())

        // Calculate time until next 2-week period
        const now = new Date()
        const msInTwoWeeks = 14 * 24 * 60 * 60 * 1000
        const currentPeriodStart = Math.floor(now.getTime() / msInTwoWeeks) * msInTwoWeeks
        const nextPeriodStart = currentPeriodStart + msInTwoWeeks
        const timeUntilNextPeriod = nextPeriodStart - now.getTime()

        // Set initial timeout to align with 2-week periods
        const initialTimeout = setTimeout(() => {
            setCurrentEvent(getEventForCurrentPeriod())
            
            // After initial alignment, update every 2 weeks
            const interval = setInterval(() => {
                setCurrentEvent(getEventForCurrentPeriod())
            }, msInTwoWeeks)

            // Cleanup interval on component unmount
            return () => clearInterval(interval)
        }, timeUntilNextPeriod)

        // Cleanup timeout on component unmount
        return () => clearTimeout(initialTimeout)
    }, [])

    return (
        <div className='bg-slate-200 md:py-12 py-6 px-4'>
            <h3 className='md:px-32 py-10 text-gray-600'>Sample Event from our Archives</h3>

            <div className='flex flex-col md:flex-row md:px-32'>
                <div className='md:w-1/3'>
                    <Image
                        src={currentEvent.thumbnail}
                        width={500}
                        height={1000} 
                        alt={currentEvent.title} 
                        className='w-full h-full object-cover object-center rounded-lg' 
                    />
                </div>
                <div className='md:w-2/3 md:px-10'>
                    <h2 className='text-2xl font-bold text-black'>{currentEvent.title}</h2>
                    <Link href={`/gallery/${currentEvent.id}`} className='bggreen text-white hover:bg-lime-600 px-4 p-2 rounded-lg mt-4 inline-block'>View Event</Link>

                    <div id='event-slideshow' className='flex flex-wrap mt-5'>
                        {currentEvent.images.map((image) => (
                            <div key={image.id} className='w-1/2 md:w-1/4 p-2'>
                                <Image 
                                    width={500} 
                                    height={500} 
                                    src={image.image} 
                                    alt={currentEvent.title} 
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