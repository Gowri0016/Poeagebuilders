import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-16 px-6 overflow-hidden shadow-xl">
      {/* Blueprint-like Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md -z-10 pointer-events-none border-t border-b border-dashed border-yellow-500/20" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold tracking-wider text-yellow-400 mb-2">Poeage Builder's</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We engineer strong foundations — from site planning to smart structural solutions. Blending innovation with infrastructure for a better tomorrow.
          </p>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">Blueprints. Progress. Stories. Join us on the journey.</p>
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
              <Twitter size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={22} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="text-sm text-gray-300"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Our Structures</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Design Solutions</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Request Estimate</a></li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 border-t border-gray-700/40 pt-6 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Poeage Builder's</span>. Engineered with precision. All rights reserved.
      </motion.div>
    </footer>
  );
}
