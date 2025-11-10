import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [flippedCards, setFlippedCards] = useState([false, false]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const toggleFlip = (index) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = !newFlipped[index];
    setFlippedCards(newFlipped);
  };

  return (
    <main className="min-h-screen text-black font-sans py-14 px-6  flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
        Contact Us
      </h1>

      {/* Problem Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
          Struggling to track your child’s progress?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Many parents find it hard to monitor attendance, results, and performance.
          Missing updates can create stress and uncertainty.
        </p>
      </motion.section>

      {/* Flip Cards Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {[
          {
            title: "Real-Time Dashboard",
            text: "Track attendance, performance, and results instantly with a clear dashboard.",
            backTitle: "Benefits",
            points: ["Instant updates", "Easy to use", "Track everything in one place"],
          },
          {
            title: "Weekly Updates",
            text: "Stay informed with weekly progress reports and transparent communication directly via email.",
            backTitle: "Advantages",
            points: ["Weekly performance updates", "Email alerts for parents", "Improved communication"],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative group perspective cursor-pointer h-64 sm:h-72"
            onClick={() => toggleFlip(index)}
          >
            <div
              className={`relative w-full h-full preserve-3d duration-700 transition-transform ${
                flippedCards[index] ? "rotate-y-180" : "group-hover:rotate-y-180"
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center text-center backface-hidden">
                <h3 className="text-2xl font-bold mb-3 text-black">{card.title}</h3>
                <p className="text-gray-700 text-base sm:text-lg">{card.text}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center text-center rotate-y-180 backface-hidden">
                <h3 className="text-2xl font-bold mb-3 text-teal-700">{card.backTitle}</h3>
                <ul className="text-gray-700 text-base sm:text-lg space-y-1 list-disc list-inside">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </main>
  );
}
