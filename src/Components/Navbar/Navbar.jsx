import React from "react";
import logo from "../../assets/logo.png"; // Correct relative path
import AnimatedSection from "../Animations/Animatedsection";
export default function Navbar() {
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
      className="fixed top-0 w-full bg-teal-800 shadow z-50 flex justify-between items-center px-8 py-4"
      delay={0}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="MASH MAGIC" className="h-9 mr-4" />
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex gap-7 items-center font-medium font-premium text-white font-sans-serif rounded-sm">
        {navItems.map(item => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              className="hover:text-yellow-500 transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Call-to-action Button */}
      <a
        href="#demo"
        className="bg-yellow-500 text-teal-900 font-bold px-5 py-2 rounded-xl shadow hover:bg-yellow-400 ml-4 transition"
      >
        Book a Free Demo
      </a>
    </AnimatedSection>
  );
}
