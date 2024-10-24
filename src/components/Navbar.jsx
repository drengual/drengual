import { useState } from "react";
import { useEffect } from "react";
import drenlogo from "../assets/dren__logo.png";
import resume from "../assets/Aldren_Bagual_Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.open(resume, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 bg-transparent w-full navbarr ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center text-white text-2xl font-bold tracking-widest">
          <img src={drenlogo} className="h-16 w-16 mx-4" alt="Logo" />
          ALDREN BAGUAL
        </div>

        {/* Links and button for desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-purple-300 transition duration-300"
          >
            Contact
          </a>
          <button
            onClick={handleClick}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300 hover:scale-105"
          >
            My Resume
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-purple-300 transition duration-300"
          >
            <svg
              className={`w-6 h-6 transform ${
                isOpen ? "rotate-90" : ""
              } transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-purple-800 text-center w-full md:hidden `}
      >
        <a
          href="#home"
          className="block text-white p-4 hover:bg-purple-600 transition duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-white p-4 hover:bg-purple-600 transition duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="block text-white p-4 hover:bg-purple-600 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block text-white p-4 hover:bg-purple-600 transition duration-300"
        >
          Contact
        </a>
        <button
          onClick={handleClick}
          className="block w-full bg-purple-500 text-white p-4 hover:bg-purple-600 transition duration-300"
        >
          My Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
