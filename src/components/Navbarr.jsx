import { useState, useEffect } from "react";
import drenlogo from "../assets/dren__logo.png";
import resume from "../assets/Aldren_Bagual_Resume.pdf";

function Navbarr() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className={`sticky navbar bg-transparent navbarr ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-start text-white font-bold tracking-widest">
          {/* Responsive logo */}
          <img
            src={drenlogo}
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-2 sm:mx-4"
            alt="Logo"
          />
          {/* Responsive text */}
          <span className="text-lg sm:text-xl md:text-2xl">ALDREN BAGUAL</span>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className={` ${isMobile ? "hidden" : ""} text-white `}>
            <a href="#home">Home</a>
          </li>
          <li className={` ${isMobile ? "hidden" : ""} text-white `}>
            <a href="#about">About</a>
          </li>
          <li className={` ${isMobile ? "hidden" : ""} text-white `}>
            <a href="#projects">Projects</a>
          </li>

          <li className={` ${isMobile ? "" : "md:hidden"}  `}>
            <details>
              <summary className="text-white px-4 py-2 rounded transition duration-300 hover:scale-105">
                Navigation
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <button
              onClick={handleClick}
              className="bg-purple-500 text-white mx-5 px-4 py-2 rounded hover:bg-purple-600 transition duration-300 hover:scale-105"
            >
              My Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbarr;
