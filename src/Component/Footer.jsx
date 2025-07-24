import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Poeage IT Solution</h2>
          <p className="text-sm text-gray-400 mt-2">
            Empowering Careers through Internships & Courses
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-2">Quick Links</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:underline text-sm">Home</a>
            <a href="#" className="hover:underline text-sm">Courses</a>
            <a href="#" className="hover:underline text-sm">Internships</a>
            <a href="#" className="hover:underline text-sm">Contact</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Poeage IT Solution. All rights reserved.
      </div>
    </footer>
  );
}
