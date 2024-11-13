"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md'; // Dropdown icon
import { HiMenu, HiX } from 'react-icons/hi'; // Menu and Close icons
import Image from 'next/image';

const Navbar = () => {
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white bg-opacity-100 shadow-md z-10">
      <div className="flex items-center justify-between md:px-10 px-4 py-3">
         {/* Logo */}
         <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={120} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </Link>        

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-lime-600 hover:text-green-400">Home</Link>
          <Link href="/about" className="text-black hover:text-gray-700">About</Link>
          <Link href="/gallery" className="text-black hover:text-gray-700">Gallery</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black hover:text-gray-700"
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black bg-opacity-90 border border-gray-500 rounded shadow-lg">
                <Link href="/audioAndVisual" className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50">Audio & Visual</Link>
                <Link href="/conferencesAndExhibitions" className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50">Conferences & Exhibitions</Link>
                <Link href="/stageAndLighting" className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50">Stage & Lighting</Link>
                <Link href="/printingAndBranding" className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50">Printing & Branding</Link>
                <Link href="/productLaunches" className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50">Products & Launches</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="text-black hover:text-gray-700">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-black cursor-pointer hover:text-gray-700" />
          <button className="px-4 py-2 bg-lime-600 text- rounded hover:bg-green-600">Talk to Us</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX className="text-black h-6 w-6" /> : <HiMenu className="text-black h-6 w-6" />}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-2 items-end">
          <Link href="/" className="text-lime-600 hover:text-green-400 py-2">Home</Link>
          <Link href="/about" className='text-black py-2 hover:text-gray-700'>About</Link>          
          <Link href="/gallery" className="text-black hover:text-gray-700 py-2">Gallery</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black hover:text-gray-700 py-2"
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-40 bg-white text-black bg-opacity-70 border border-gray-500 rounded shadow-lg">
                <Link href="/audioAndVisual" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Audio & Visual</Link>
                <Link href="/conferencesAndExhibitions" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Conferences & Exhibitions</Link>
                <Link href="/stageAndLighting" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Stage & Lighting</Link>
                <Link href="/printingAndBranding" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Printing & Branding</Link>
                <Link href="/productLaunches" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Products & Launches</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="text-black hover:text-gray-700 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
