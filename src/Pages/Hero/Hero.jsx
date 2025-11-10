import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpeg";
import im3 from "../../assets/im3.jpeg";
import im4 from "../../assets/im4.jpg";
import Animatedsection from "../../Components/Animations/Animatedsection.jsx";
import { ClipboardCheck, Star, BookOpen } from "lucide-react";

/* ---------- Modal ---------- */
function ExamPrepPackModal({ show, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          What's inside the ₹199 Exam Prep Pack?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
              title: "Mock Exams",
              desc: "Practice real exam questions, get instant feedback.",
            },
            {
              icon: <Star className="w-8 h-8 text-yellow-500" />,
              title: "Expert Tips",
              desc: "Get strategies from top mentors to boost your scores.",
            },
            {
              icon: <BookOpen className="w-8 h-8 text-green-600" />,
              title: "Progress Tracker",
              desc: "See your weekly progress with dashboard updates.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 bg-white/40 dark:bg-gray-700/40 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {item.icon}
              <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-white mt-2 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#prep"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all"
          >
            Get My ₹199 Exam Prep Pack
          </a>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-3xl font-bold transition-transform hover:rotate-90"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
}

/* ---------- Hero Section ---------- */
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
    <main className="relative pt-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-teal-950 -z-10" />

      {/* Left Text Section */}
      <Animatedsection className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-teal-700 to-green-600 dark:from-teal-700 dark:to-green-500 bg-clip-text text-transparent leading-tight"
        >
          Every Child Learns Differently.
          <br />
          <span className="text-teal-700">MASH MAGIC</span> Adapts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-lg"
        >
          Personalized 1-on-1 coaching for K3–K12 students, powered by proven
          pedagogy and trusted mentorship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#demo"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-700 to-green-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-teal-500/40 transition-transform"
          >
            Book a Free Demo
          </a>
          <button
            onClick={() => setShowPackModal(true)}
            className="px-6 sm:px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-800 hover:text-white shadow-md transition-all"
          >
            Get ₹199 Exam Prep Pack
          </button>
        </motion.div>
      </Animatedsection>

      {/* Right Image Carousel */}
      <Animatedsection className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          {heroImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`object-cover w-full h-full absolute top-0 left-0 rounded-3xl transition-opacity duration-700 ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Dots */}
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

      {/* Modal */}
      <ExamPrepPackModal
        show={showPackModal}
        onClose={() => setShowPackModal(false)}
      />
    </main>
  );
}
