import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Projects", "Contact", "Resume"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg border-b border-gray-200/10" : ""
      }`}
      style={{ backgroundColor: scrolled ? "rgba(3, 7, 18, 0.9)" : "transparent" }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          style={{ fontFamily: "CormorantGaramond, serif" }}
        >
          <span className="text-400">&lt;</span>
          SoumyaNayak
          <span className="text-400"> /&gt;</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          {navItems.map((item) =>
            item === "Resume" ? (
              <a
                key={item}
                href="https://drive.google.com/file/d/1P3IYOsbwPL8l84NSm4s7o2yAxpyCAycj/view"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            )
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="md:hidden text-center py-4 px-4"
        style={{ backgroundColor: "rgba(3, 7, 18, 1)" }}
      >
        <div
          className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 mb-3"
          style={{ fontFamily: "CormorantGaramond, serif" }}
        >
          Soumya Nayak
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) =>
            item === "Resume" ? (
              <a
                key={item}
                href="https://drive.google.com/uc?export=view&id=1P3IYOsbwPL8l84NSm4s7o2yAxpyCAycj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
