import React from 'react';
import Logo from '../Asset/1.png';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-500 via-black to-blue-500 text-white p-2">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 mr-10 ml-10">
        {/* Logo */}
        <div>
          <img className="h-12 " src={Logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline transition">Home</a>
          <a href="#" className="hover:underline transition">Menu</a>
        </div>
      </nav>
    </header>
  );
}
