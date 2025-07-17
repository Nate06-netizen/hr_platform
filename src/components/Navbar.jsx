"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center relative">
      <div className="text-2xl font-bold text-blue-800">HireHub</div>

      {/* Hamburger menu (only on mobile) */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation links */}
      <div
        className={`absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <a href="/" className="block px-4 py-2 md:py-0 text-gray-800 hover:text-blue-600">
          Home
        </a>
        <a href="/jobs" className="block px-4 py-2 md:py-0 text-gray-800 hover:text-blue-600">
          Jobs
        </a>
        <a href="/contact" className="block px-4 py-2 md:py-0 text-gray-800 hover:text-blue-600">
          Contact
        </a>
        <a href="/about" className="block px-4 py-2 md:py-0 text-gray-800 hover:text-blue-600">
          About Us
        </a>
        <a href="/blog" className="block px-4 py-2 md:py-0 text-gray-800 hover:text-blue-600">
          Blog
        </a>
      </div>
    </nav>
  );
}