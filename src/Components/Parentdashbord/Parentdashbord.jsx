import React from "react";
import dashboardMock from "../../assets/dashboard-mockup.png"; // 🖼️ Replace with your dashboard image

export default function ParentsValueSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12">
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
        <h2 className="text-4xl font-extrabold mb-8 text-teal-700 text-center lg:text-left">
          For Parents
        </h2>
        <ul className="space-y-6 text-gray-700 text-lg font-medium">
          <li className="flex items-start gap-4">
            <span className="w-4 h-4 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Live Dashboard – </span>
              Real-time progress tracking for attendance, performance, and results.
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-4 h-4 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Weekly Updates – </span>
              Transparent communication between teachers and parents.
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-4 h-4 mt-2 bg-teal-500 rounded-full"></span>
            <div>
              <span className="font-bold text-gray-900">Refund Guarantee – </span>
              Complete peace of mind with no hidden surprises.
            </div>
          </li>
        </ul>

        {/* Bottom tagline */}
        <p className="mt-10 text-gray-800 text-lg italic text-center lg:text-left">
          Your peace of mind is as important as your child’s success.
        </p>
      </div>
    </section>
  );
}
