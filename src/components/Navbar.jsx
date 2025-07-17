'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 shadow sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-700">HireHub</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 space-y-3">
          <Link href="/" className="block text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/jobs" className="block text-gray-700" onClick={() => setIsOpen(false)}>Jobs</Link>
          <Link href="/about" className="block text-gray-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block text-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
