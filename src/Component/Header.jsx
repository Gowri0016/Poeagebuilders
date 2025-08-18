import React, { useState, useRef, useEffect } from 'react';
import Logo from '../Asset/5.png';
import { FaCaretDown, FaBars, FaTimes, FaHardHat } from 'react-icons/fa';
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
    <header className="fixed z-30 w-full backdrop-blur-md bg-gradient-to-r from-yellow-700 via-black to-yellow-600 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-14 md:h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="Poeage Builders Logo"
            className="h-10 md:h-12 drop-shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          {/* Projects Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-1 nav-item"
            >
              <FaHardHat className="text-base" />
              {capitalizeFirst('Projects')}
              <FaCaretDown className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 bg-black/90 text-yellow-200 rounded-lg shadow-lg py-2 w-44 border border-yellow-500/30"
                >
                  {['Residential', 'Commercial', 'Industrial'].map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-yellow-600/40 transition rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      {capitalizeFirst(item)}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/solutions" className="nav-item">{capitalizeFirst('Solutions')}</a>
          <a href="/contact" className="nav-item">{capitalizeFirst('Contact')}</a>

          {/* Desktop CTA */}
          <a
            href="/getquote"
            className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-white transition"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-2xl text-yellow-200 focus:outline-none"
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
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-400/30 text-yellow-200 px-6 py-5 space-y-3 shadow-lg rounded-b-2xl"
          >
            {[ 'Projects', 'Solutions', 'Contact'].map((item, idx) => (
              <a
                key={idx}
                href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className="block py-2 hover:text-yellow-400 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {capitalizeFirst(item)}
              </a>
            ))}

            <a
              href="/getquote"
              className="block mt-4 text-center text-sm font-bold bg-yellow-400 text-black py-2 rounded-full shadow hover:bg-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Underline CSS */}
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
          background: #facc15;
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