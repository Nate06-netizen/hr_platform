'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-800">HireHub</div>
      
      {/* Hamburger button - visible on small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Nav Links - hidden on small screens */}
      <div className={`md:flex space-x-6 items-center ${isOpen ? "block" : "hidden"} md:block`}>
        <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
        <a href="/jobs" className="text-gray-800 hover:text-blue-600">Jobs</a>
        <a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a>
        <a href="/about" className="text-gray-800 hover:text-blue-600">About</a>
        <a href="/blog" className="text-gray-800 hover:text-blue-600">Blog</a>
      </div>
    </nav>
  );
}