"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const services = ['Audio and Visual', 'Conferences and Exhibitions', 'Printing and Branding', 'Product Launch', 'Stage and Lighting']

  const serviceImages = [
    '/audioresize.png',
    '/exhibition.jpeg',
    '/printingresize.png',
    '/hero-launch.webp',
    '/hero-stage.png'
  ]
  
  const [service, setService] = useState('');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentServiceText = services[currentServiceIndex];

    // If we're typing
    if (isTyping) {
      if (service.length < currentServiceText.length) {
        const typingTimeout = setTimeout(() => {
          setService(currentServiceText.slice(0, service.length + 1));
        }, 100);
        return () => clearTimeout(typingTimeout);
      } else {
        // Finished typing, set timeout to change service
        const changeTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(changeTimeout);
      }
    } else {
      // Prepare to change to next service
      const nextIndex = (currentServiceIndex + 1) % services.length;
      setCurrentServiceIndex(nextIndex);
      setService('');
      setIsTyping(true);
    }
  }, [service, currentServiceIndex, isTyping, services]);

  // Slideshow auto-change
  useEffect(() => {
    const slideshowTimeout = setTimeout(() => {
      setCurrentServiceIndex(prev => (prev + 1) % serviceImages.length);
    }, 5000);

    return () => clearTimeout(slideshowTimeout);
  }, [currentServiceIndex]);

  // Manual navigation
  const handlePrevImage = () => {
    setCurrentServiceIndex(prev => 
      prev === 0 ? serviceImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentServiceIndex(prev => 
      (prev + 1) % serviceImages.length
    );
  };

  return (
    <div className='h-[calc(100vh-60px)] relative overflow-hidden'>      
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={serviceImages[currentServiceIndex]}
          alt={`${services[currentServiceIndex]} service`}
          fill
          style={{objectFit: 'cover'}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          loading="lazy"
          quality={100} // Added quality attribute
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 md:px-32 px-4 flex flex-col text-white bg-black bg-opacity-60 justify-end gap-5 h-full">
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
              Your Event  |  Our Canvas -
            </p>
            <p className='font-semibold md:text-2xl text-xl green'>
              {service}
              <span className='animate-pulse'>|</span>
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

        {/* Navigation Buttons */}
        <div className='absolute top-1/2 left-0 right-0 flex justify-between px-4 z-20'>
          <button 
            onClick={handlePrevImage}
            className='bg-white/50 p-2 rounded-full bg-opacity-30'
          >
            &#10094;
          </button>
          <button 
            onClick={handleNextImage}
            className='bg-white/50 p-2 rounded-full bg-opacity-30'
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero