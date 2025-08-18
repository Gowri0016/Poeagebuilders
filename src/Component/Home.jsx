import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaCity, FaWarehouse, FaTree } from "react-icons/fa";
import Logo1 from '../Asset/Poeage_Logo_4.png';
import Logo2 from '../Asset/6.png';
import Logo3 from '../Asset/1.png';
import Logo4 from '../Asset/Screenshot 2025-08-11 at 12.11.19 PM.png';

export default function Home() {
  const services = [
    {
      title: "Residential Living",
      icon: <FaHome className="text-5xl text-yellow-400" />,
      desc: "Designing vibrant, sustainable, and comfortable homes that inspire better living.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Corporate & Commercial Spaces",
      icon: <FaCity className="text-5xl text-yellow-400" />,
      desc: "Creating smart, flexible business environments that empower growth and innovation.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Industrial & Logistics Facilities",
      icon: <FaWarehouse className="text-5xl text-yellow-400" />,
      desc: "Building advanced facilities that support industry, trade, and global connectivity.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Eco-Friendly Projects",
      icon: <FaTree className="text-5xl text-yellow-400" />,
      desc: "Driving sustainability with innovative green practices for a healthier tomorrow.",
      gradient: "from-emerald-500 to-lime-600",
    },
  ];

  const connected = [
    {
      title: "Poeage Technology",
      desc: "Innovating infrastructure solutions that redefine how cities and communities thrive.",
      icon: <img src={Logo1} alt="Poeage Technology" className="w-20 h-20 object-contain rounded-full shadow-lg" />,
      link: "https://poeage.com",
    },
    {
      title: "Poeage IT Solution",
      desc: "Delivering digital transformation and IT innovations that empower global businesses.",
      icon: <img src={Logo2} alt="Poeage IT Solution" className="w-20 h-20 object-contain rounded-full shadow-lg" />,
      link: "https://poeageitsolution.com",
    },
    {
      title: "Poeage Hub",
      desc: "Where collaboration meets creativity—shaping modern spaces with elegance and impact.",
      icon: <img src={Logo3} alt="Poeage Hub" className="w-20 h-20 object-contain rounded-full shadow-lg" />,
      link: "https://poeagehub.com",
    },
    {
      title: "Poeage Web Services",
      desc: "Secure, scalable, and innovative cloud solutions powering the future of business.",
      icon: <img src={Logo4} alt="Poeage Web Services" className="w-20 h-20 object-contain rounded-full shadow-lg" />,
      link: "https://pws-rouge-five.vercel.app/",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center justify-around px-4 md:px-6 py-16 md:py-20 gap-10 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg md:max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl md:text-6xl font-light tracking-tight mb-6 text-slate-800 leading-snug md:leading-tight">
            Building Tomorrow, <span className="text-yellow-500">Today</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-yellow-500">Poeage Builders</span> — your partner in shaping iconic skylines, sustainable communities, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            From family homes to smart cities and digital innovation — Poeage leads with trust, vision, and excellence.
          </p>
          <a
            href="/getquote"
            className="inline-block px-5 md:px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 transition-transform duration-300 shadow-lg text-sm md:text-base"
          >
            Get Your Quote
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <motion.h2
        
          className="text-3xl md:text-4xl font-light text-center mb-12 md:mb-16 text-slate-900"
        >
          Poeage Builders – Our Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-20">
          {services.map((service, index) => (
            <motion.div
              className={`p-6 md:p-8 rounded-3xl shadow-xl bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/80 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-5">
                {service.icon}
                <h3 className="text-lg md:text-xl font-semibold text-slate-800">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connected Companies */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
        {/* Background shapes */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 0.25 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-0 w-40 md:w-52 h-40 md:h-52 bg-orange-300 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 md:bottom-28 right-0 w-56 md:w-72 h-56 md:h-72 bg-green-300 rounded-full blur-3xl"
        ></motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-light text-center mb-14 md:mb-20 text-slate-900"
        >
          Our Group of Companies
        </motion.h2>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 relative z-10">
          {connected.map((branch, index) => (
            <motion.div
              className="p-6 md:p-10 bg-white rounded-3xl shadow-xl flex flex-col items-center text-center gap-4 md:gap-6 hover:shadow-2xl transition-transform duration-300"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                {branch.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold tracking-wide text-slate-800">
                {branch.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {branch.desc}
              </p>
              <a
                href={branch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 cursor-pointer px-4 py-2 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
              >
                Visit Website
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}