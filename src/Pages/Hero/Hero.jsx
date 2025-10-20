import React, { useState, useEffect } from "react";
import im1 from "../../assets/im1.jpeg";
import im2 from "../../assets/im2.jpeg";
import im3 from "../../assets/im3.jpeg";
import im4 from "../../assets/im4.jpeg";
export default function Home() {
  const heroImages = [im1, im2, im3, im4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
   <main className="pt-20 max-w-7xl mx-auto mt-2 flex flex-col md:flex-row items-center ">
  {/* Left: Heading and Text */}
  <div className="md:w-1/2 p-6 flex flex-col justify-center items-start">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-900 mb-6 leading-tight">
      Every Child Learns Differently.<br /> MASH MAGIC Adapts.
    </h1>
    <p className="text-lg sm:text-xl text-gray-900 mb-6 font-sans-serif rounded-md ">
      Personalized 1-on-1 coaching for K3–K12 students, powered by proven pedagogy and trusted mentorship.
    </p>
    <div className="flex flex-wrap gap-4">
      <a
        href="#demo"
        className="bg-yellow-400 text-teal-900 font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition"
      >
        Book a Free Demo
      </a>
      <a
        href="#prep"
        className="bg-gradient-to-br from-[#e0f7fa] to-[#fff]  text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-teal-700 transition"
      >
        Get the 199 Exam Prep Pack
      </a>
    </div>
  </div>

  {/* Right: Image Carousel */}
  <div className="md:w-1/2 flex flex-col items-center p-4">
    <div className="relative w-full max-w-md h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      {heroImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`object-cover w-full h-full absolute top-0 left-0 transition-transform duration-500 ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
    {/* Slide dots */}
    <div className="flex space-x-2 mt-3">
      {heroImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`h-3 rounded-full transition-all ${
            idx === currentSlide ? "bg-teal-700 w-6" : "bg-gray-400 w-3"
          }`}
        />
      ))}
    </div>
  </div>
</main>



  );
}
