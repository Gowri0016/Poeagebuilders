import React, { useState, useRef, useEffect } from 'react';
import Logo from '../Asset/1.png'; // Make sure this path is correct
import { FaCaretDown, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed z-30 w-full backdrop-blur-md bg-gradient-to-r from-cyan-500 via-black to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-12 md:h-16">
        <a href="/" className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-12 drop-shadow-md"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-white font-medium">
          <a href="/" className="nav-item">{capitalizeFirst('home')}</a>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 nav-item"
            >
              <FaBriefcase className="text-base" />
              {capitalizeFirst('services')}
              <FaCaretDown />
            </button>

        
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-2xl text-cyan-200 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-cyan-400/20 text-cyan-200 px-6 py-5 space-y-3"
          >
            {['home'].map((item, idx) => (
              <a
                key={idx}
                href={`/${item.toLowerCase().replace(' ', '').replace('development', '')}`}
                className="block py-2 hover:text-cyan-400 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {capitalizeFirst(item)}
              </a>
            ))}

            <a
              href="/quotes"
              className="block mt-4 text-center text-sm font-bold bg-cyan-400 text-black py-2 rounded-full shadow hover:bg-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS */}
      <style>{`
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: cyan;
          transition: width 0.3s ease;
        }
        .nav-item:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
