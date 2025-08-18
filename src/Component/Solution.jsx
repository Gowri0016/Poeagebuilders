import React from 'react';
import { motion } from 'framer-motion';
import { FaDraftingCompass, FaCogs, FaHardHat, FaPaintRoller, FaRulerCombined, FaProjectDiagram } from 'react-icons/fa';

export default function Solution() {
  const solutions = [
    {
      title: "Site Survey & Planning",
      desc: "Accurate land surveys, soil testing, and layout planning to ensure a strong foundation for your project.",
      icon: <FaDraftingCompass className="text-4xl text-yellow-500" />,
    },
    {
      title: "Structural Design",
      desc: "RCC and steel structural design services tailored for durability, safety, and compliance.",
      icon: <FaRulerCombined className="text-4xl text-blue-500" />,
    },
    {
      title: "Turnkey Construction",
      desc: "Complete project execution including labor, materials, MEP, finishing, and handover.",
      icon: <FaHardHat className="text-4xl text-green-500" />,
    },
    {
      title: "Renovation & Retrofitting",
      desc: "Revamp old structures with modern enhancements, energy efficiency, and added safety.",
      icon: <FaPaintRoller className="text-4xl text-pink-500" />,
    },
    {
      title: "Interior & Elevation",
      desc: "We blend aesthetics and functionality to craft beautiful interiors and eye-catching exteriors.",
      icon: <FaCogs className="text-4xl text-purple-500" />,
    },
    {
      title: "Project Management",
      desc: "End-to-end supervision, quality control, and deadline assurance from foundation to finish.",
      icon: <FaProjectDiagram className="text-4xl text-red-500" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 md:px-12 py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.3),transparent_70%)]" />

      <div className="max-w-7xl w-full space-y-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-light text-yellow-700 mb-6 drop-shadow-md">
            End-to-End Civil Construction Solutions
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            At <span className="font-semibold text-yellow-600">Poeage Builders</span>, we deliver innovative civil engineering solutions — ensuring precision, durability, and design excellence from concept to completion.
          </p>
        </motion.div>

        {/* Solutions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-yellow-500 flex flex-col items-center text-center gap-4 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
}
