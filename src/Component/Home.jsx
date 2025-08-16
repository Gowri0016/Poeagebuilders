import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCity, FaWarehouse, FaTree, FaBuilding, FaHandshake, FaUsers } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      title: "Residential Spaces",
      icon: <FaHome className="text-4xl text-yellow-400" />, 
      desc: "Crafting modern and efficient living environments for families and individuals.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Commercial Hubs",
      icon: <FaCity className="text-4xl text-yellow-400" />, 
      desc: "Developing dynamic business centers and office complexes for growth.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Industrial Facilities",
      icon: <FaWarehouse className="text-4xl text-yellow-400" />, 
      desc: "Building robust warehouses and industrial setups for global needs.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Sustainable Projects",
      icon: <FaTree className="text-4xl text-yellow-400" />, 
      desc: "Leading eco-conscious construction with sustainable and green practices.",
      gradient: "from-emerald-500 to-lime-600",
    },
  ];

  const connected = [
    {
      title: "Poeage Tech Innovations",
      icon: <FaBuilding className="text-4xl text-orange-400" />, 
      desc: "Driving innovation in infrastructure and smart city solutions.",
    },
    {
      title: "Poeage IT Solutions",
      icon: <FaTree className="text-4xl text-green-400" />, 
      desc: "Providing cutting-edge IT services and technology-driven projects.",
    },
    {
      title: "Poeage Global Partners",
      icon: <FaHandshake className="text-4xl text-yellow-400" />, 
      desc: "Collaborating with global leaders to deliver excellence in construction.",
    },
    {
      title: "Poeage Social Connect",
      icon: <FaUsers className="text-4xl text-cyan-400" />, 
      desc: "Engaging communities through impactful and meaningful initiatives.",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-around px-6 py-16 gap-10">
          {/* Hero Section */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-800">
              Designing the Future, Today
            </h1>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-yellow-500">Poeage Builders</span> — your trusted partner in construction, innovation, and excellence.
            </p>
          </div>

          {/* What We Build Section */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-gray-700 mb-6">
              From homes and offices to industries and sustainable projects — we deliver with quality, innovation, and vision.
            </p>
            <a
              href="/getquote"
              className="inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Get Your Quote
            </a>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 bg-black bg-clip-text text-transparent"
          >
            Poeage Builders – What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-gray-800 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Connected Section */}
        <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 relative overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-slate-900"
          >
            Poeage Groups – Our Network
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
            {connected.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.08 }}
                className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4 hover:shadow-2xl transition"
              >
                {branch.icon}
                <h3 className="text-xl font-semibold">{branch.title}</h3>
                <p className="text-gray-600 text-sm">{branch.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
