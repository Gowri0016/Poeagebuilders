import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-20 px-6 overflow-hidden">
      {/* Background Accent Shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-yellow-400 tracking-wide">Poeage Builder's</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            From blueprint to brilliance — we build more than structures. We shape futures through innovation and integrity.
          </p>
        </motion.div>

        {/* Social Media + Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-yellow-300">Connect with Us</h3>
          <p className="text-sm text-gray-400">Let’s build the future, together.</p>
          <div className="flex justify-center md:justify-start gap-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:scale-110 hover:text-yellow-400 transition duration-200"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Home', 'Our Structures', 'Design Solutions', 'Request Estimate'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-400 hover:pl-1 transition-all duration-200 block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-slate-700/40 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Poeage Builder's</span>. All rights reserved.
      </div>

      {/* Decorative Corner Ribbon */}
      <div className="absolute top-0 left-0 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-br-xl shadow-md">
        BUILDER ZONE
      </div>
    </footer>
  );
}
