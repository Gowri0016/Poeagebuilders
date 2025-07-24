import React from 'react';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-around px-6 py-12 gap-10">
      
      {/* Header Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-light mb-6">
          Let’s Build Your Career with Us
        </h1>
        <p className="text-md md:text-lg text-gray-600">
          Welcome to <span className="font-semibold text-blue-500">Poeage IT Solution</span> — we provide internships and professional courses to empower your future.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do?</h2>
        <p className="text-gray-600 mb-6">
          We offer both online and offline internships with certification. Our training includes hands-on projects, mentorship, and flexible schedules tailored for students and freshers.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300"
        >
          Get in Touch
        </a>
      </div>
      
    </div>
  );
}
