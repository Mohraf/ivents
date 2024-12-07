"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setTimeoutId(timeout);
  };

  // New function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white text-black bg-opacity-100 shadow-md z-10">
      <div className="flex items-center justify-between md:px-10 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ivents-logo.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            href="/"
            className={`${
              isActive("/") ? "green" : "text-black"
            } hover:text-gray-700`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "green" : "text-black"
            } hover:text-gray-700`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`${
              isActive("/gallery") ? "green" : "text-black"
            } hover:text-gray-700`}
          >
            Gallery
          </Link>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center ${
                isActive("/audio") ||
                isActive("/conferences") ||
                isActive("/stage") ||
                isActive("/printing") ||
                isActive("/product")
                  ? "text-lime-700"
                  : "text-black"
              } hover:text-gray-700`}
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black bg-opacity-90 border border-gray-500 rounded shadow-lg">
                <Link
                  href="/audioAndVisual"
                  className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50"
                >
                  Audio & Visual
                </Link>
                <Link
                  href="/conferencesAndExhibitions"
                  className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50"
                >
                  Conferences & Exhibitions
                </Link>
                <Link
                  href="/stageAndLighting"
                  className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50"
                >
                  Stage & Lighting
                </Link>
                <Link
                  href="/printingAndBranding"
                  className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50"
                >
                  Printing & Branding
                </Link>
                <Link
                  href="/productLaunches"
                  className="block px-4 py-2 hover:bg-gray-400 hover:bg-opacity-50"
                >
                  Products & Launches
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "green" : "text-black"
            } hover:text-gray-700`}
          >
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex gap-2">
            <div className="flex flex-col justify-center">
              <FaPhone className="green" />
            </div>
            <span className="">+254 798 259 215</span>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-center">
              <FaEnvelope className="green" />
            </div>
            <span className="">info@geicoevents.net</span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiX className="text-black h-6 w-6" />
          ) : (
            <HiMenu className="text-black h-6 w-6" />
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-2 items-start">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`${
              isActive("/") ? "green" : "text-black"
            } hover:text-gray-700 py-2`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={`${
              isActive("/about") ? "green" : "text-black"
            } hover:text-gray-700 py-2`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            onClick={closeMobileMenu}
            className={`${
              isActive("/gallery") ? "green" : "text-black"
            } hover:text-gray-700 py-2`}
          >
            Gallery
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className={`flex items-center ${
                isActive("/audio") ||
                isActive("/conferences") ||
                isActive("/stage") ||
                isActive("/printing") ||
                isActive("/product")
                  ? "text-lime-700"
                  : "text-black"
              } hover:text-gray-700`}
            >
              Services
              <MdArrowDropDown className="ml-1" />
            </button>
            {isMobileDropdownOpen && (
              <div className="mt-2 w-40 bg-white text-black bg-opacity-70 border-[0.5px] border-gray-500 rounded shadow-lg">
                <Link
                  href="/audioAndVisual"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50"
                >
                  Audio & Visual
                </Link>
                <Link
                  href="/conferencesAndExhibitions"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50"
                >
                  Conferences & Exhibitions
                </Link>
                <Link
                  href="/stageAndLighting"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50"
                >
                  Stage & Lighting
                </Link>
                <Link
                  href="/printingAndBranding"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50"
                >
                  Printing & Branding
                </Link>
                <Link
                  href="/productLaunches"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-500 hover:bg-opacity-50"
                >
                  Products & Launches
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className={`${
              isActive("/contact") ? "green" : "text-black"
            } hover:text-gray-700 py-2`}
          >
            Contact
          </Link>
          <div className="justify-end mt-3">
            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <FaPhone className="green" />
              </div>
              <span className="">+254 798 259 215</span>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <FaEnvelope className="green" />
              </div>
              <span className="">info@geicoevents.net</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;