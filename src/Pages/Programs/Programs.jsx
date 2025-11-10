import React from "react";
import AnimatedSection from "../../Components/Animations/Animatedsection";

const PROGRAMS = [
  {
    name: "Classmate",
    price: "₹12,999 – ₹19,499",
    description: "Best for regular academic support.",
    features: ["Weekly progress tracking", "Parent updates"],
    bestSeller: false,
  },
  {
    name: "Classmate Pro",
    price: "₹16,999 – ₹21,499",
    description: "Deeper coaching with advanced mentorship.",
    features: [
      "Weekly progress tracking",
      "Parent updates",
      "Advanced mentorship",
    ],
    bestSeller: true,
  },
  {
    name: "Magic Mentor",
    price: "₹7,999 – ₹65,999",
    description: "Personalized mentorship plans (1–12 months).",
    features: [
      "Weekly progress tracking",
      "Parent updates",
      "Flexible duration",
    ],
    bestSeller: false,
  },
  {
    name: "Bright Bridge",
    price: "₹6,000 – ₹7,000",
    description: "Bridge programs between academic levels.",
    features: ["Weekly progress tracking", "Parent updates"],
    bestSeller: false,
  },
];

export default function Programs() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      <AnimatedSection className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight break-words">
          Our Programs & Pricing
        </h1>
        <p className="text-center text-black mb-16 text-lg">
          All programs come with weekly progress tracking & parent updates.
        </p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {PROGRAMS.map((program) => (
            <div
              key={program.name}
              className="group perspective w-full h-[320px] cursor-pointer"
            >
              {/* Flip wrapper */}
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                
                {/* Front side */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center text-center backface-hidden">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {program.name}
                  </h2>
                  {program.bestSeller && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Best Seller
                    </span>
                  )}
                  <p className="text-gray-400 italic">Hover to see program details</p>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg rotate-y-180 backface-hidden flex flex-col justify-between p-6">
                  {/* Top content section with consistent spacing */}
                  <div className="flex flex-col flex-grow">
                    <p className="text-yellow-700 font-semibold text-xl mb-2">
                      {program.price}
                    </p>
                    <p className="text-gray-600 mb-4 min-h-[48px]">
                      {program.description}
                    </p>
                    <ul className="space-y-2 flex-grow">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-center"
                        >
                          <span className="w-3 h-3 bg-teal-800 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom button - perfectly aligned */}
                  <div className="flex justify-center mt-6">
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
