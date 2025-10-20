import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AnimatedSection from "../../Components/Animations/Animatedsection.jsx";
import dashboardMock from "../../assets/dashboard-mockup.jpg"; // Replace with your actual dashboard image

// Chart data
const CHART_DATA = [
  { subject: "Math", before: 62, after: 81 },
  { subject: "Science", before: 55, after: 78 },
  { subject: "English", before: 70, after: 85 },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "My daughter improved from 62% to 81% in just 3 months. The confidence boost is priceless.",
    parent: "Parent, Grade 9",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "The dashboard shows exactly how my child is progressing. I finally feel in control.",
    parent: "Parent, Grade 6",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote: "One-to-one teaching made my son love Maths again.",
    parent: "Parent, Grade 5",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

// ✅ BarGraph Component (animated on scroll)
function BarGraph() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      className="w-full max-w-lg bg-mash-gradient rounded-xl p-4"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={CHART_DATA} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="before" fill="#FACC15" name="Before" radius={[6, 6, 0, 0]} animationDuration={1200} />
          <Bar dataKey="after" fill="#16A34A" name="After" radius={[6, 6, 0, 0]} animationDuration={1500} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

// ✅ Testimonials Carousel
function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md bg-gradient-teal-400 rounded-2xl p-4 flex flex-col items-center min-h-[330px]">
      <img
        src={TESTIMONIALS[currentSlide].photo}
        alt={TESTIMONIALS[currentSlide].parent}
        className="w-20 h-20 rounded-full mb-3 object-cover shadow"
      />
      <p className="text-gray-700 italic text-center mb-3">
        "{TESTIMONIALS[currentSlide].quote}"
      </p>
      <p className="text-teal-600 font-semibold text-center">
        {TESTIMONIALS[currentSlide].parent}
      </p>
      {/* Carousel Dots */}
      <div className="flex mt-4 space-x-2">
        {TESTIMONIALS.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              currentSlide === idx ? "bg-teal-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

// ✅ For Parents (Dashboard Mockup Section) - Medium Gap
function ParentsValueSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      className="bg-gradient-teal-400 py-10 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-6 mt-6"
    >
      {/* Left: Dashboard mockup */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={dashboardMock}
          alt="Dashboard Mockup"
          className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Right: Bullet points */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold mb-6 text-teal-700 text-center lg:text-left">
          For Parents
        </h2>
        <ul className="space-y-4 text-gray-700 text-lg font-medium">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Live Dashboard – </span>
              Real-time progress tracking for attendance, performance, and results.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Weekly Updates – </span>
              Transparent communication between teachers and parents.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Refund Guarantee – </span>
              Complete peace of mind with no hidden surprises.
            </div>
          </li>
        </ul>

        {/* Bottom tagline */}
        <p className="mt-6 text-gray-800 text-lg italic text-center lg:text-left">
          Your peace of mind is as important as your child’s success.
        </p>
      </div>
    </motion.section>
  );
}

// ✅ Results Main Page
export default function Results() {
  return (
     <main className="min-h-screen bg-gradient-teal-50 font-sans text-gray-800 flex flex-col items-center py-16">
      <AnimatedSection className="w-full">
        <h1 className="text-5xl font-extrabold mb-15 text-center">Student Results</h1>
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-6">
          <div className="lg:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Before → After Progress</h2>
            <BarGraph />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Parent Testimonials</h2>
            <TestimonialsCarousel />
          </div>
        </div>
      </AnimatedSection>

      {/* Dashboard Mockup (Parents Section) */}
      <ParentsValueSection />
    </main>
  );
}
