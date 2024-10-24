"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md'; // Dropdown icon
import { HiMenu, HiX } from 'react-icons/hi'; // Menu and Close icons
import Image from 'next/image';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-black bg-opacity-70 shadow-md z-10">
      <div className="flex items-center justify-between px-4 py-3">
         {/* Logo */}
         <Link href="/" className="flex items-center">
          <Image 
            src="/ivents-logo.png" // Replace with your logo path
            alt="Logo"
            width={120} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX className="text-white h-6 w-6" /> : <HiMenu className="text-white h-6 w-6" />}
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-green-500 hover:text-green-400">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-white hover:text-gray-300"
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-black bg-opacity-70 border border-gray-500 rounded shadow-lg">
                <Link href="/service1" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Audio & Visual</Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Conferences & Exhibitions</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Stage & Lighting</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Printing & Branding</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Products & Launches</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white cursor-pointer hover:text-gray-300" />
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Talk to Us</button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-2">
          <Link href="/" className="text-green-500 hover:text-green-400 py-2">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 py-2">About</Link>
          <Link href="/gallery" className="text-white hover:text-gray-300 py-2">Gallery</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-white hover:text-gray-300 py-2"
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-40 bg-black bg-opacity-70 border border-gray-500 rounded shadow-lg">
                <Link href="/service1" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Audio & Visual</Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Conferences & Exhibitions</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Stage & Lighting</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Printing & Branding</Link>
                <Link href="/service3" className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50">Products & Launches</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="text-white hover:text-gray-300 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
