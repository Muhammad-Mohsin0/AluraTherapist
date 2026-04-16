import React, { useState } from "react";
import { logo } from "../../assets/data";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <header className="px-2 md:px-12 py-2 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-28 md:w-32 object-contain" />

        <ul className="hidden md:flex md:-ml-6 lg:-ml-2 items-center gap-2 lg:gap-8 *:cursor-pointer *:hover:text-[#3DC0BA] *:font-bold *:text-[#37474F] *:text-md lg:*:text-lg *:transition-colors">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About Us</li>
          <li onClick={() => scrollToSection("how")}>How It Works</li>
          <li onClick={() => scrollToSection("why")}>Why Choose Us</li>
          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>

        <div className="flex items-center gap-4">
          <h1 className="hidden sm:block cursor-pointer hover:text-[#3DC0BA] text-[#37474F] text-[16px] font-bold underline">
            Log In
          </h1>

          <button className="bg-[#3DC0BA] text-sm md:text-[16px] font-bold text-white px-4 py-1 rounded-2xl hover:opacity-90 transition">
            Request Access
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#37474F] text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <ul className="flex flex-col gap-3 text-lg font-bold text-[#37474F] *:cursor-pointer *:hover:text-[#3DC0BA] *:transition-colors">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("how")}>How It Works</li>
            <li onClick={() => scrollToSection("why")}>Why Choose Us</li>
            <li onClick={() => scrollToSection("contact")}>Contact Us</li>

            <li onClick={closeMenu} className="sm:hidden underline">
              Log In
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
