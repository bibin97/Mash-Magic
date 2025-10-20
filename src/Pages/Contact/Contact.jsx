import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fff] text-black font-sans py-14 px-6">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-1 text-center text-black">Contact Us</h1>
      
      {/* Problem Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-black">Struggling to track your child’s progress?</h2>
        <p className="text-black text-lg">
          Many parents find it hard to monitor attendance, results, and performance. Missing updates can create stress and uncertainty.
        </p>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
      >
        <div className="bg-white/70 p-8 rounded-2xl shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-black">Real-Time Dashboard</h3>
          <p className="text-black mb-4">
            Track attendance, performance, and exam results instantly with a clear dashboard.
          </p>
        </div>
        <div className="bg-white/70 p-8 rounded-2xl shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-black">Weekly Updates</h3>
          <p className="text-black mb-4">
            Stay informed with weekly updates directly to your email. Transparent communication is our priority.
          </p>
        </div>
      </motion.section>

      {/* Trust Section (your content here if needed) */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {/* Add content if required */}
      </motion.section>

      {/* Conversion Section (Contact Form) */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto bg-white/80 p-12 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-xl bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-700"
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </main>
  );
}
