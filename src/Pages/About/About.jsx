import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BookOpen, Brain, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-teal-700 text-black-900 font-poppins min-h-screen text-gray-800 font-sans overflow-hidden">
      
      {/* PAGE HEADING */}
      <section className="py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
        >
         <span className="text-teal-900">About</span>
          <span className="text-yellow-600"> Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Discover how we empower every child to succeed through mentorship, science, and personalized learning.
        </motion.p>
      </section>

      {/* HERO / STORY SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-6 py-24 gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-teal-900 leading-tight">
            Our Story — <span className="text-yellow-600">Mentorship</span>
          </h2>

          <p className="text-lg text-black leading-relaxed">
            MASH MAGIC is built to help every child succeed their way. Backed by <strong>10+ years</strong> of education training & sales expertise, we blend <em>science with mentorship</em> to transform learning outcomes.
          </p>

          <p className="text-black">
            It’s not just tuition — it’s a <strong>personalized mentorship platform</strong> designed to adapt to every child’s needs. Supported by <strong>TZaHu – The Sales Hunter</strong> and a skilled team in education sales & student development, we merge <em>pedagogy + technology + accountability</em> to drive true success.
          </p>

          <motion.p
            className="italic text-black-700 font-semibold text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            “To help every child learn their way and succeed their way.”
          </motion.p>
        </motion.div>

        {/* Founder / Mentor Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="/assets/founder.jpg"
              alt="Founder / Mentor"
              className="w-96 h-96 object-cover rounded-3xl shadow-2xl border-4 border-cyan-200 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gray-900/10 group-hover:bg-gray-600/20 transition-all duration-500"></div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Icons Section */}
      <section className="relative bg-gradient-teal-700 text-black py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-teal-800">
            The <span className="text-yellow-400">MASH MAGIC</span> Approach
          </h2>
          <p className="max-w-3xl mx-auto text-black mb-12">
            We combine pedagogy, technology, and accountability to ensure every learner achieves their fullest potential — guided by expert mentors who care.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Pedagogy */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center space-y-4 shadow-lg hover:bg-teal-800 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-black" />
              <h3 className="text-2xl font-semibold">Pedagogy</h3>
              <p className="text-black-200 text-center">We apply modern learning science to make education efficient and enjoyable.</p>
            </motion.div>

            {/* Technology */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center space-y-4 shadow-lg hover:bg-teal-800 transition-all duration-300">
              <Brain className="w-12 h-12 text-black" />
              <h3 className="text-2xl font-semibold">Technology</h3>
              <p className="text-black text-center">Smart digital tools personalize the journey of every student for lasting results.</p>
            </motion.div>

            {/* Accountability */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center space-y-4 shadow-lg hover:bg-teal-800 transition-all duration-300">
              <Users className="w-12 h-12 text-black" />
              <h3 className="text-2xl font-semibold">Accountability</h3>
              <p className="text-black text-center">Regular check-ins ensure progress, motivation, and success for every learner.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
