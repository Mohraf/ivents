import Link from 'next/link'
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SocialMediaBanner = () => {
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
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
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
    </div>
  )
}

export default SocialMediaBanner