import React from "react";
import logo from "../../assets/logo.png";
import AnimatedSection from "../Animations/Animatedsection";
import { useTheme } from "../../Context/Themecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", target: "home" },
    { name: "Why Us", target: "whyus" },
    { name: "About Us", target: "about" },
    { name: "Programs", target: "programs" },
    { name: "Results", target: "results" },
    { name: "Blog", target: "blog" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <AnimatedSection
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4
                 bg-transparent backdrop-blur-xl 
                 text-black dark:text-white
                 transition-all duration-500 shadow-none"
      delay={0}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="MASH MAGIC"
          className="h-9 mr-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-7 items-center font-medium font-sans-serif">
        {navItems.map((item) => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              className="hover:text-teal-700 dark:hover:text-teal-700 transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme Toggle + CTA */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 dark:bg-gray-800/30 text-black dark:text-white 
                     hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300"
          aria-label="Toggle dark mode"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* CTA Button */}
        <a
          href="#demo"
          className="px-6 py-2 bg-gradient-to-r from-teal-700 to-green-700 text-white font-semibold rounded-full 
                     hover:scale-105 shadow-lg hover:shadow-teal-500/40 transition-all duration-300"
        >
          Book a Free Demo
        </a>
      </div>
    </AnimatedSection>
  );
}
