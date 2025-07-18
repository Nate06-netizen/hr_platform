'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white text-center py-32 px-4 bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-purple-400 opacity-30 rounded-full blur-2xl"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Job Career
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Connecting exceptional talent with innovative companies
        </p>

        <div className="flex justify-center relative z-10">
          <Link href="/about">
            <span className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition cursor-pointer">
              Learn More
            </span>
          </Link>
        </div>
      </section>

      {/* Why Choose HireHub Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose HireHub?
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          We're not just a job board. HireHub is designed to bridge the gap between top talent and forward-thinking companies using modern, efficient hiring tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Efficient Hiring</h3>
            <p className="text-gray-700">
              Cut down on hiring time with our intuitive and user-friendly interface that helps you act fast on top candidates.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">High-Quality Matches</h3>
            <p className="text-gray-700">
              Our platform ensures companies find talent that not only fits the job description but also aligns with culture and goals.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Candidate Experience</h3>
            <p className="text-gray-700">
              We focus on making the application process smooth and welcoming for every candidate that interacts with HireHub.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}