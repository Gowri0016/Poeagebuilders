import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Or use any icon library like Heroicons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r to-blue-500 via-black from-sky-400 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Poeage IT Solution</h1>
          <p className="text-sm">Your one-stop solution for IT services</p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/detail">Detail</a>
          <a href="/intern">Intern</a>
          <div className="relative group">
            <button className="hover:text-blue-300">Get Quote</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-md z-10">
              <a href="/getquote/web" className="block px-4 py-2 hover:bg-blue-100">Web Development</a>
              <a href="/getquote/app" className="block px-4 py-2 hover:bg-blue-100">App Development</a>
              <a href="/getquote/ai" className="block px-4 py-2 hover:bg-blue-100">AI Solutions</a>
            </div>
          </div>
          <a href="/online">Online</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/detail">Detail</a>
          <a href="/intern">Intern</a>
          <div className="relative">
            <details className="bg-white text-black rounded shadow-md">
              <summary className="cursor-pointer px-4 py-2">Get Quote</summary>
              <a href="/getquote/web" className="block px-4 py-2 hover:bg-blue-100">Web Development</a>
              <a href="/getquote/app" className="block px-4 py-2 hover:bg-blue-100">App Development</a>
              <a href="/getquote/ai" className="block px-4 py-2 hover:bg-blue-100">AI Solutions</a>
            </details>
          </div>
          <a href="/online">Online</a>
        </div>
      )}
    </div>
  );
}
