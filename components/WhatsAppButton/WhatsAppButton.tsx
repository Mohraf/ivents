'use client';

import Link from 'next/link'
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = (): void => {
    // Format phone number by removing any non-digit characters
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { 
      icon: <FaInstagram size={24} />, 
      url: 'https://instagram.com/iventsbygeico',
      color: 'hover:text-[#E4405F] text-gray-800'
    },
    { 
      icon: <FaXTwitter size={24} />, 
      url: 'https://x.com/justgeico',
      color: 'hover:text-black text-gray-800'
    },
    { 
      icon: <FaTiktok size={24} />, 
      url: 'https://tiktok.com/@iventsbygeico',
      color: 'hover:text-black text-gray-800'
    },
    { 
      icon: <FaYoutube size={24} />, 
      url: 'https://youtube.com/@iventsbygeico',
      color: 'hover:text-[#FF0000] text-gray-800'
    },
    { 
      icon: <FaFacebook size={24} />, 
      url: 'https://facebook.com/your-page',
      color: 'hover:text-[#1877F2] text-gray-800'
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://linkedin.com/company/your-company',
      color: 'hover:text-[#0A66C2] text-gray-800'
    },
  ]

  return (
    <>
    <div className="fixed bottom-6 right-4  -translate-y-1/5 flex flex-col gap-4 z-50">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
        >
          {social.icon}
        </Link>
      ))}
      <button
        onClick={handleClick}
        className=" bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>

    </>
  );
};

export default WhatsAppButton;