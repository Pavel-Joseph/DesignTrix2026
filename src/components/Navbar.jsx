import React, { useEffect, useState } from "react";
import ZapText from "./styles/ZapText";
import { navbarLinks } from "../data";
import { useLocation } from "react-router-dom";

const Navbar = ({ handleHover }) => {
  const location = useLocation();
  const [selected, setSelected] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect scrolling to update navbar background and selected section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Change navbar style when scrolled

      let currentSection = "";
      navbarLinks.forEach(({ link }) => {
        const section = document.getElementById(link.replace("#", ""));
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            currentSection = link.replace("#", "");
          }
        }
      });

      setSelected(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle URL hash change for smooth scrolling
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setSelected(id);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      className={`border-2 border-white/20 shadow-lg shadow-cyan-500/30 px-2 sm:px-4 py-2 sm:py-4 w-full sm:max-w-fit flex justify-center items-center rounded-lg fixed z-50 transition-all duration-300 ${
        isScrolled ? " shadow-md" : "bg-transparent"
      }`}
    >
      <ul className="text-xs sm:text-sm lg:uppercase flex flex-row space-x-2 sm:space-x-6 lg:space-x-9 text-slate-600">
        {navbarLinks.map((data, index) => (
          <ZapText
            key={index}
            text={data.name}
            handleHover={handleHover}
            secondaryColor={"text-white"}
            link={data.link}
            isSelected={data.link.replace("#", "") === selected}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
