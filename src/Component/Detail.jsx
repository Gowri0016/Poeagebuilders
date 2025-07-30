import React from 'react';

export default function Detail() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 text-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light mt-8 mb-4">
            Civil Construction Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            At <span className="text-yellow-600 font-semibold">Poeage Builders</span>, we bring architectural vision to life through precision planning, durable construction, and future-ready infrastructure.
          </p>
        </div>

        {/* Our Capabilities */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4">Our Capabilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Residential and Commercial Building Construction</li>
            <li>Institutional and Industrial Infrastructure Projects</li>
            <li>Roadways, Bridges, and Public Utility Systems</li>
            <li>Interior Works, Elevation Designs, and Finishing</li>
            <li>Turnkey Civil Contracting & Project Management</li>
          </ul>
        </div>

        {/* Quality & Assurance */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4">Why Choose Us</h2>
          <p className="text-gray-700">
            Our team of experienced civil engineers, architects, and site managers work together to ensure structural integrity, timely delivery, and cost-effective solutions.
          </p>
          <p className="text-gray-700">
            We use certified materials, modern tools, and sustainable practices to meet industry standards and exceed client expectations.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-white font-medium rounded-full bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 shadow-md"
          >
            Book a Site Visit or Consultation
          </a>
        </div>

      </div>
    </div>
  );
}
