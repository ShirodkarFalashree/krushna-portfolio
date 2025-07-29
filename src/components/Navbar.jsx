import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-[#eee] h-[75px] flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-2 rounded-lg">
            {/* Feather icon can be replaced with a real SVG/icon if needed */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-gray-900">CreatorFlow</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-black font-medium">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#process" className="hover:text-primary">Process</a>
          <a href="#works" className="hover:text-primary">Works</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#reviews" className="hover:text-primary">Reviews</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href="#blog" className="hover:text-primary">Blog</a>
        </div>

        {/* Contact Button */}
        <a href='#contact' className="bg-[#171717] text-white rounded-full px-4 py-2 flex items-center shadow-lg ">
          Contact
          <span className="ml-2 bg-white  rounded-full h-10 w-10 flex justify-center items-center text-black">&rarr;</span>
        </a>

        {/* Optional: Mobile Menu Button */}
        <div className="md:hidden">
          {/* Add hamburger menu if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
