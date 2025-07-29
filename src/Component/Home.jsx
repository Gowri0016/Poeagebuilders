import React from 'react';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-around px-6 py-16 gap-10">
      
      {/* Hero Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-800">
          Building the Future, One Project at a Time
        </h1>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-500">Poeage Builders</span> — your trusted partner in digital construction, smart design, and infrastructure innovation.
        </p>
      </div>

      {/* What We Build Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">What We Build</h2>
        <p className="text-gray-700 mb-6">
          From websites and apps to enterprise platforms and automation systems — we engineer digital solutions that support real-world businesses, civil projects, and industries.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Request a Consultation
        </a>
      </div>

    </div>
  );
}
