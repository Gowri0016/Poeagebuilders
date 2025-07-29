import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MdConstruction, MdSecurity, MdPrecisionManufacturing,
  MdCloud, MdEngineering, MdBuild
} from 'react-icons/md';

export default function Services() {
  const services = [
    {
      title: 'Smart Infrastructure Setup',
      type: 'Infrastructure',
      description: 'Modernize your construction with IoT-powered digital controls and seamless integration.',
      icon: <MdConstruction className="text-3xl text-yellow-600 mb-2" />
    },
    {
      title: 'Surveillance & Site Safety',
      type: 'Security',
      description: 'Live CCTV, safety compliance, and biometric access to ensure site integrity.',
      icon: <MdSecurity className="text-3xl text-yellow-600 mb-2" />
    },
    {
      title: 'Structural Automation',
      type: 'Automation',
      description: 'Implement BIM workflows, CAD automations, and precision layouts for smart builds.',
      icon: <MdPrecisionManufacturing className="text-3xl text-yellow-600 mb-2" />
    },
    {
      title: 'Cloud-Based Planning',
      type: 'Enterprise',
      description: 'Enable collaborative planning for clients, architects & engineers with cloud tools.',
      icon: <MdCloud className="text-3xl text-yellow-600 mb-2" />
    },
    {
      title: 'Engineering Consultancy',
      type: 'Consulting',
      description: 'Get expert project guidance, budgeting, structural planning, and regulatory approvals.',
      icon: <MdEngineering className="text-3xl text-yellow-600 mb-2" />
    },
    {
      title: 'Project Lifecycle DevOps',
      type: 'Management',
      description: 'End-to-end agile construction with real-time tracking and client dashboards.',
      icon: <MdBuild className="text-3xl text-yellow-600 mb-2" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 py-16 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-light mb-6">Services by Poeage Builders</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At Poeage Builders, we combine smart construction strategies with cutting-edge digital engineering to deliver modern and scalable infrastructure solutions.
        </p>
        <p className="mt-4 text-sm text-black font-medium">
          🏗️ Empowering property owners, contractors & public bodies across India with futuristic construction services.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link
            to={`/getquote?service=${encodeURIComponent(service.title)}`}
            key={index}
            className="hover:no-underline"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-xl shadow-md p-6 border border-yellow-400/30 hover:shadow-lg transition cursor-pointer text-center"
            >
              {service.icon}
              <h2 className="text-xl font-medium mb-2 text-yellow-800">{service.title}</h2>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                  service.type === 'Premium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-yellow-50 text-yellow-700'
                }`}
              >
                {service.type} Service
              </span>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Benefits Banner */}
      <div className="bg-yellow-900 mt-20 mx-auto max-w-4xl p-6 rounded-xl text-center border border-yellow-700 shadow-md">
        <h3 className="text-xl font-semibold text-white mb-2">🏆 Why Poeage Builders?</h3>
        <p className="text-yellow-100 text-sm">
          ✔️ 5+ years of expertise in civil & digital infrastructure<br />
          ✔️ Delivered 60+ tech-enabled construction projects<br />
          ✔️ Precision planning, transparent execution, and real-time updates
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/getquote"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-yellow-700 border border-yellow-600 transition"
        >
          Request a Project Quote
        </a>
        <p className="text-sm text-gray-500 mt-3">Quick response | Tailored solutions | Trusted by industry leaders</p>
      </div>
    </div>
  );
}
