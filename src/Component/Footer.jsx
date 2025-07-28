import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-14 px-6 mt-20 relative overflow-hidden shadow-inner">
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md rounded-lg -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start text-center md:text-left">

        {/* Brand Description */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-cyan-400 mb-2">Poeage IT Solution</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We bridge the gap between academic learning and real-world IT experience through internships, courses, and innovative projects.
          </p>
        </div>

        {/* Stay Connected CTA */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-cyan-300 mb-2">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">Follow us for updates, job openings, and tech news.</p>
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <Twitter size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-sm text-gray-300">
          <h3 className="text-lg font-semibold text-cyan-300 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Courses</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Internships</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700/40 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Poeage IT Solution</span>. All rights reserved.
      </div>
    </footer>
  );
}
