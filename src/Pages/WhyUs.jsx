import React, { useState } from "react";
import card1 from "../assets/card1.jpeg";
import card11 from "../assets/card11.jpeg";
import card2 from "../assets/card2.jpeg";
import card22 from "../assets/card22.jpeg";
import card3 from "../assets/card3.jpg";
import card33 from "../assets/card33.jpeg";
import v1 from "../assets/v1.jpeg";
import v2 from "../assets/v2.jpeg";
import a1 from "../assets/a1.jpeg";
import au1 from "../assets/au1.jpeg";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import kin1 from "../assets/kin1.jpeg";
import kin2 from "../assets/kin2.jpeg";
import ImageCarousel from "../Components/ImageCarousel.jsx";
import Animatedsection from "../Components/Animatedsection.jsx";
import { CalendarCheck2, ClipboardCheck, Rocket } from "lucide-react";

const BLOOM_STEPS = [
  { label: "Visual", images: [v1, v2] },
  { label: "Auditory", images: [a1, au1] },
  { label: "Reading/Writing", images: [r1, r2] },
  { label: "Kinesthetic", images: [kin1, kin2] },
];

function HowItWorksModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <Animatedsection className="bg-gradient-to-br from-teal-50 via-white to-yellow-50 rounded-3xl shadow-lg p-8 max-w-3xl w-full flex flex-col items-center relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-800 mb-8">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10 w-full">
          <div className="flex flex-col items-center text-center flex-1">
            <div className="bg-yellow-100 p-4 rounded-full mb-3 shadow-sm">
              <CalendarCheck2 className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="font-bold text-lg text-teal-800 mb-1">
              Book Free Demo
            </h3>
            <p className="text-gray-600 text-sm">
              Reserve a session for your child, absolutely free.
            </p>
          </div>

          <div className="flex flex-col items-center text-center flex-1">
            <div className="bg-teal-100 p-4 rounded-full mb-3 shadow-sm">
              <ClipboardCheck className="w-10 h-10 text-teal-600" />
            </div>
            <h3 className="font-bold text-lg text-teal-800 mb-1">
              Personalized Assessment
            </h3>
            <p className="text-gray-600 text-sm">
              Get a tailored learning plan based on strengths and needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center flex-1">
            <div className="bg-green-100 p-4 rounded-full mb-3 shadow-sm">
              <Rocket className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-bold text-lg text-teal-800 mb-1">
              Start Learning Journey
            </h3>
            <p className="text-gray-600 text-sm">
              Begin your child’s transformation with Mash Magic mentorship.
            </p>
          </div>
        </div>

        <a
          href="#demo"
          className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 rounded-full shadow-lg transition"
        >
          Book My Child’s Free Demo Now
        </a>

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-teal-800 font-bold text-xl"
        >
          ×
        </button>
      </Animatedsection>
    </div>
  );
}

export default function WhyUs() {
  const [currentBloom, setCurrentBloom] = useState(BLOOM_STEPS[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-gradient-teal-700 text-black-900 font-poppins min-h-screen">
      {/* Why Students Struggle Section */}
      <Animatedsection className="max-w-7xl mx-auto px-6 pt-12 pb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent text-center mb-3 leading-tight break-words">
          Why Students Struggle?
        </h1>
        <p className="text-xl text-black-500 text-center mb-14">
          Every child has potential, but traditional tuition fails because...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div className="bg-[#fafbfc] border border-gray-200 rounded-xl flex flex-col items-center min-h-[420px] max-w-[380px] mx-auto overflow-hidden">
            <div className="w-full h-[260px]">
              <ImageCarousel
                slides={[{ img: card1 }, { img: card11 }]}
                height="100%"
              />
            </div>
            <div className="w-full px-10 pt-8 pb-8 flex flex-col items-center">
              <h3 className="text-xl font-bold text-black-800 mb-3 text-center">
                Same Teaching for All
              </h3>
              <p className="text-base text-black-500 text-center">
                Same teaching method for every student,
                <br /> no attention to individual learning pace
              </p>
            </div>
          </div>

          <div className="bg-[#fafbfc] border border-gray-200 rounded-xl flex flex-col items-center min-h-[440px] max-w-[380px] mx-auto overflow-hidden">
            <div className="w-full h-[280px]">
              <ImageCarousel
                slides={[{ img: card2 }, { img: card22 }]}
                height="100%"
              />
            </div>
            <div className="w-full px-10 pt-8 pb-8 flex flex-col items-center">
              <h3 className="text-xl font-bold text-black-800 mb-3 text-center">
                No Personal Attention
              </h3>
              <p className="text-base text-black-500 text-center">
                Learning gaps lead to low confidence <br /> and exam stress
              </p>
            </div>
          </div>

          <div className="bg-[#fafbfc] border border-gray-200 rounded-xl flex flex-col items-center min-h-[440px] max-w-[380px] mx-auto overflow-hidden">
            <div className="w-full h-[280px]">
              <ImageCarousel
                slides={[{ img: card3 }, { img: card33 }]}
                height="100%"
              />
            </div>
            <div className="w-full px-10 pt-8 pb-8 flex flex-col items-center">
              <h3 className="text-xl font-bold text-black mb-3 text-center">
                Parents in the Dark
              </h3>
              <p className="text-base text-black-700 text-center">
                Parents get little to no visibility <br /> on their child's
                progress
              </p>
            </div>
          </div>

          <p className="font-extrabold text-black text-2xl text-center col-span-full">
            It’s not your child’s weakness, it’s the system.
          </p>
        </div>
      </Animatedsection>

      {/* Our Solution Section */}
      <Animatedsection className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
          Our Solution: <span>The Magic Way</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE */}
          <div className="md:w-1/2 flex flex-col justify-center text-gray-700 text-lg space-y-6">
            <p>
              We assess your child’s learning style (Visual, Auditory,
              Reading/Writing, Kinesthetic).
            </p>
            <p>
              We design personalized lessons around their strengths, using
              Bloom’s mastery steps.
            </p>
            <p>Parents track visible improvements every week.</p>
            <p className="font-semibold text-gray-900">
              Demo Journey: Problem → Learning Gap → Personalized Method →
              Confidence Boost
            </p>
            <button
              className="px-8 py-3 w-max rounded-full bg-yellow-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300 hover:bg-yellow-300"
              onClick={() => setShowModal(true)}
            >
              See How It Works
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="mb-4 w-full max-w-md h-[320px] overflow-hidden rounded-xl shadow-lg">
              {currentBloom?.images?.[imgIndex] && (
                <img
                  src={currentBloom.images[imgIndex]}
                  alt={currentBloom.label}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <div className="flex justify-center gap-5 max-w-md w-full px-1">
              {BLOOM_STEPS.map((step) => (
                <div
                  key={step.label}
                  onMouseEnter={() => {
                    setCurrentBloom(step);
                    setImgIndex(0);
                  }}
                  className="flex flex-col items-center cursor-pointer min-w-[80px] group"
                >
                  {step.images?.[0] && (
                    <img
                      src={step.images[0]}
                      alt={step.label}
                      className="rounded-md w-20 h-20 object-cover shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                    />
                  )}
                  <span className="text-sm font-semibold mt-1 text-gray-700 group-hover:text-teal-600">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <HowItWorksModal show={showModal} onClose={() => setShowModal(false)} />
      </Animatedsection>
    </main>
  );
}
