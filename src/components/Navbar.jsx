'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto relative">
      {/* Logo */}
      <h1 className="text-4xl font-bold whitespace-nowrap">HireHub</h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 items-center text-base font-semibold">
        <Link href="/" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
          Home
        </Link>
        <Link href="/jobs" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
          Jobs
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
          Contact
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
          About Us
        </Link>
        <Link href="/blog" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
          Blog
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 z-50">
          <div className="flex flex-col py-4 space-y-2">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 transition-colors font-semibold"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 transition-colors font-semibold"
              onClick={closeMenu}
            >
              Jobs
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 transition-colors font-semibold"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              href="/about" 
              className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 transition-colors font-semibold"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-6 py-3 transition-colors font-semibold"
              onClick={closeMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}