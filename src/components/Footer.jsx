"use client";

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About HireHub</h3>
          <p className="text-gray-300 mb-4">
            Transforming the way companies find talent and candidates find opportunities. 
            Our platform connects top talent with innovative companies worldwide.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">Job Listings</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400" />
              <span className="text-gray-300">123 Tech Street, San Francisco, CA 94103</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-gray-400" />
              <span className="text-gray-300">(+234) 801 234 5678</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-400" />
              <span className="text-gray-300">info@hirehub.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          &copy; {currentYear} HireHub Platform. All rights reserved.
          <span className="block mt-2 text-sm">
            Privacy Policy | Terms of Service | Cookie Policy
          </span>
        </p>
      </div>
    </footer>
  );
}
