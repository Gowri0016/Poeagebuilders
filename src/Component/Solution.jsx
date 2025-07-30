import React from 'react';

export default function Solution() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-12 md:py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-16">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-light text-yellow-800 mb-4">
            End-to-End Civil Construction Solutions
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            At <span className="font-semibold text-yellow-600">Poeage Builders</span>, we provide comprehensive civil engineering solutions that cover every phase of construction — from concept to completion.
          </p>
        </div>

        {/* Solutions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Site Survey & Planning",
              desc: "Accurate land surveys, soil testing, and layout planning to ensure a strong foundation for your project.",
            },
            {
              title: "Structural Design",
              desc: "RCC and steel structural design services tailored for durability, safety, and compliance.",
            },
            {
              title: "Turnkey Construction",
              desc: "Complete project execution including labor, materials, MEP, finishing, and handover.",
            },
            {
              title: "Renovation & Retrofitting",
              desc: "Revamp old structures with modern enhancements, energy efficiency, and added safety.",
            },
            {
              title: "Interior & Elevation",
              desc: "We blend aesthetics and functionality to craft beautiful interiors and eye-catching exteriors.",
            },
            {
              title: "Project Management",
              desc: "End-to-end supervision, quality control, and deadline assurance from foundation to finish.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-yellow-500"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full transition"
          >
            Discuss Your Project
          </a>
        </div>

      </div>
    </div>
  );
}
