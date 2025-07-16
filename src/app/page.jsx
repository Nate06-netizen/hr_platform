'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ companies: 0, jobs: 0, placements: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCounts(prev => ({
        companies: Math.min(prev.companies + 250, 50000),
        jobs: Math.min(prev.jobs + 100, 10000),
        placements: Math.min(prev.placements + 150, 25000),
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 sm:space-y-16">
      {/* Hero Section with Animation */}
      <section className="relative mx-4 mt-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 sm:py-24 md:py-32 text-center overflow-hidden px-4 rounded-3xl shadow-lg">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-700"></div>
            <div className="absolute bottom-10 left-1/2 w-20 sm:w-24 h-20 sm:h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative">
            Find Your Dream Job Here With Us
            <span className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full opacity-50 animate-ping"></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8">
            Connecting exceptional talent with innovative companies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          
            <Link
              href="/about"
              className="bg-blue-600 bg-opacity-20 backdrop-blur-sm border border-blue-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-opacity-30 transition transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">{counts.companies.toLocaleString()}+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Partner Companies</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2">{counts.jobs.toLocaleString()}+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Active Jobs</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl sm:rounded-2xl transform hover:-translate-y-2 transition duration-300 sm:col-span-2 md:col-span-1 mx-auto w-full">
            <h3 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">{counts.placements.toLocaleString()}+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Successful Placements</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
            Why Choose HireHub
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base">
            Our platform is designed to streamline your job search process
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Streamlined Applications",
              description: "Apply to positions in minutes with our optimized process"
            },
            {
              title: "Verified Opportunities",
              description: "All listings are vetted for quality and legitimacy"
            },
            {
              title: "Direct Connections",
              description: "Connect directly with companies without intermediaries"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600">
              Hear from professionals who found their ideal roles through HireHub
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I landed my dream role at a FAANG company within two weeks of using HireHub!",
                author: "Alex Johnson",
                role: "Senior Software Engineer"
              },
              {
                quote: "The application process was seamless. I had multiple offers within a month.",
                author: "Maria Rodriguez",
                role: "Product Manager"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-4 my-8 py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-3xl shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to advance your career?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Start exploring opportunities today with no signup required
          </p>
          <Link
            href="/jobs"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition inline-block"
          >
            Browse All Jobs
          </Link>
        </div>
      </section>
    </div>
  );
}