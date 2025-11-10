import React, { useState, useEffect } from "react";
import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpeg";
import im3 from "../../assets/im3.jpeg";
import im4 from "../../assets/im4.jpg";
import Animatedsection from "../../Components/Animations/Animatedsection.jsx";
import { ClipboardCheck, Star, BookOpen } from "lucide-react";

function ExamPrepPackModal({ show, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  dark:bg-black/70">
      <Animatedsection
        className="
          rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center relative 
          bg-white/30 dark:bg-gray-800/30 backdrop-blur-md 
          transition-all duration-500 
          hover:scale-105 hover:shadow-2xl 
          hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-800 hover:text-white
          hover:shadow-[0_0_30px_rgba(13,148,136,0.6)]
        "
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          What's inside the ₹199 Exam Prep Pack?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 w-full">
          {/* Mock Exams */}
          <div className="flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-110">
            <div className="bg-teal-100 dark:bg-teal-900 p-4 rounded-full mb-2 shadow-sm hover:bg-teal-200 dark:hover:bg-teal-800">
              <ClipboardCheck className="w-8 h-8 text-teal-700 dark:text-teal-300" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">Mock Exams</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Practice real exam questions, get instant feedback.
            </p>
          </div>

          {/* Expert Tips */}
          <div className="flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-110">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full mb-2 shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600">
              <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">Expert Tips</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get strategies from top mentors to boost your scores.
            </p>
          </div>

          {/* Personal Progress Tracker */}
          <div className="flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-110">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-2 shadow-sm hover:bg-green-200 dark:hover:bg-green-800">
              <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-400 mb-1">
              Personal Progress Tracker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              See your weekly progress with dashboard updates.
            </p>
          </div>
        </div>

        <a
          href="#prep"
          className="mt-2 bg-gray-800 dark:bg-teal-600 hover:bg-gray-600 dark:hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          Get My ₹199 Exam Prep Pack
        </a>

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 dark:text-gray-300 hover:text-teal-800 dark:hover:text-teal-400 font-bold text-xl transition-transform duration-300 hover:rotate-90"
        >
          ×
        </button>
      </Animatedsection>
    </div>
  );
}

export default function Home() {
  const heroImages = [im1, im2, im3, im4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPackModal, setShowPackModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="pt-20 max-w-7xl mx-auto mt-2 flex flex-col md:flex-row items-center  transition-colors duration-300">
      {/* Left: Heading and Text */}
      <Animatedsection className="md:w-1/2 p-6 flex flex-col justify-center items-start">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-teal-900 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent">
          Every Child Learns Differently. MASH MAGIC Adapts.
        </h1>

        <p className="text-lg sm:text-xl text-black  mb-6 font-sans-serif rounded-md">
          Personalized 1-on-1 coaching for K3–K12 students, powered by proven
          pedagogy and trusted mentorship.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="#demo"
            className="bg-gray-800  text-white font-bold px-6 py-2 rounded-full shadow hover:bg-gray-600 dark:hover:bg-teal-700 transition duration-300 ease-in-out"
          >
            Book a Free Demo
          </a>
          <a
            href="#prep"
            onClick={(e) => {
              e.preventDefault();
              setShowPackModal(true);
            }}
            className="text-black bg-white font-semibold px-6 py-2 rounded-full shadow border border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-800 hover:text-white transition duration-300"
          >
            Get the ₹199 Exam Prep Pack
          </a>
        </div>
      </Animatedsection>

      {/* Right: Image Carousel */}
      <Animatedsection
        className="md:w-1/2 flex flex-col items-center p-4"
        delay={0.2}
      >
        <div className="relative w-full max-w-md h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ transitionProperty: "opacity" }}
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
                idx === currentSlide 
                  ? "bg-teal-700 dark:bg-teal-400 w-6" 
                  : "bg-gray-400 dark:bg-gray-600 w-3"
              }`}
            />
          ))}
        </div>
      </Animatedsection>

      {/* Modal: Exam Prep Pack */}
      <ExamPrepPackModal
        show={showPackModal}
        onClose={() => setShowPackModal(false)}
      />
    </main>
  );
}
