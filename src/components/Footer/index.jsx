import React from "react";
import { FooterVector, logo } from "../../assets/data";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3DC0BA] pt-16" id="contact">
      <div className="bg-white max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 rounded-t-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Logo" className="w-28 md:w-32 object-contain" />
          <ul className=" flex flex-wrap justify-center md:flex md:-ml-6 lg:-ml-2 items-center gap-4 lg:gap-8 *:cursor-pointer *:hover:text-[#3DC0BA] *:font-bold  *:text-[#37474F] *:text-sm md:*:text-md lg:*:text-lg *:transition-colors">
            <li>Home</li>
            <li>About Us</li>
            <li>How It Works</li>
            <li>Why Choose Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[#37474F]">
            <FaFacebookF className="cursor-pointer hover:text-[#3DC0BA] transition text-lg" />
            <FaTwitter className="cursor-pointer hover:text-[#3DC0BA] transition text-lg" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#3DC0BA] transition text-lg" />
          </div>

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Alura. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#3DC0BA] text-white text-sm px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
