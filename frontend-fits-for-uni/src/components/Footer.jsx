import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-3'>
        <div className='container mx-auto px-4 text-center flex flex-col lg:flex-row lg:justify-between items-center gap-6'>
            <div className='flex items-center gap-8 justify-center text-xl'>
                <a href='https://www.facebook.com/pctegroup/' className='text-red-500 hover:text-red-300 transition-all duration-300'>
                    <FaFacebook />
                </a>
                <a href='https://www.instagram.com/pcteofficial/?hl=en' className='text-red-500 hover:text-red-300 transition-all duration-300'>
                    <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/school/pcte-ludhiana/posts/?feedView=all' className='text-red-500 hover:text-red-300 transition-all duration-300'>
                    <FaLinkedin />
                </a>
                <p className='text-center text-xs'>Contact: 0161-2888500
                      Mail:info@pcte.edu.in</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
