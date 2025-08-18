import React from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaBuilding, FaRoad, FaCogs, FaDraftingCompass } from 'react-icons/fa';

export default function Detail() {
  const capabilities = [
    {
      icon: <FaBuilding className="text-3xl text-yellow-600" />,
      title: "Residential & Commercial",
      desc: "From modern homes to large-scale commercial complexes, we deliver excellence at every scale.",
    },
    {
      icon: <FaHardHat className="text-3xl text-yellow-600" />,
      title: "Institutional & Industrial",
      desc: "Robust infrastructure solutions for schools, factories, and industries built with precision.",
    },
    {
      icon: <FaRoad className="text-3xl text-yellow-600" />,
      title: "Roads & Bridges",
      desc: "Durable connectivity projects including highways, bridges, and public utility systems.",
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-yellow-600" />,
      title: "Design & Interiors",
      desc: "Creative interior works, modern elevations, and turnkey design solutions.",
    },
    {
      icon: <FaCogs className="text-3xl text-yellow-600" />,
      title: "Turnkey Project Management",
      desc: "End-to-end contracting with a focus on timely delivery and cost-effectiveness.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Building Landmarks with Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            At <span className="text-yellow-600 font-semibold">Poeage Builders</span>, we transform visions into enduring structures through innovative engineering, modern designs, and sustainable practices.
          </p>
        </motion.div>

        {/* Capabilities */}
        <div>
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4 mb-8">
            Our Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                <p className="text-gray-600">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-4 mb-6">
            Why Choose Poeage Builders
          </h2>
          <div className="space-y-4 text-gray-700 max-w-4xl">
            <p>
              Our team of expert engineers, architects, and project managers ensures structural integrity,
              on-time delivery, and premium quality in every project.
            </p>
            <p>
              We integrate certified materials, advanced tools, and eco-friendly methodologies to achieve
              industry-leading standards and exceed client expectations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-white text-lg font-medium rounded-full bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Consultation or Site Visit
          </a>
        </motion.div>
      </div>
    </div>
  );
}
