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
    features: ["Weekly progress tracking", "Parent updates", "Advanced mentorship"],
    bestSeller: true,
  },
  {
    name: "Magic Mentor",
    price: "₹7,999 – ₹65,999",
    description: "Personalized mentorship plans (1–12 months).",
    features: ["Weekly progress tracking", "Parent updates", "Flexible duration"],
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
    <main className="bg-gradient-teal-400 min-h-screen font-sans text-gray-800">
       <AnimatedSection className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-6">
          Our Programs & Pricing
        </h1>
        <p className="text-center text-gray-700 mb-16 text-lg">
          All programs come with weekly progress tracking & parent updates.
        </p>

        {/* Grid: 4 cards in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {PROGRAMS.map((program) => (
            <div
              key={program.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{program.name}</h2>
                {program.bestSeller && (
                  <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Seller
                  </span>
                )}
              </div>

              <p className="text-teal-700 font-semibold text-xl mb-2">{program.price}</p>
              <p className="text-gray-600 mb-4">{program.description}</p>

              <ul className="mb-6 space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
