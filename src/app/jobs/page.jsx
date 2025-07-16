'use client';

import Link from 'next/link';
import jobs from '@/data/jobs';
import { useState, useEffect } from 'react';
import BackButton from '@/components/BackButton';

const toSlug = (text) => text.toLowerCase().replace(/\s+/g, '-');
const categories = [...new Set(jobs.map((job) => job.category))];

function getDaysLeft(endDate) {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchText = `${job.title} ${job.company} ${job.location}`.toLowerCase();
    return matchText.includes(searchTerm.toLowerCase());
  });

  const formatSalary = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 md:py-10 max-w-6xl mx-auto space-y-8 sm:space-y-10">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto">
        <BackButton />
      </div>

      {/* Hero Section */}
      <section className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-3 sm:mb-4">
          Professional Opportunities
        </h1>
        <p className="text-black max-w-2xl mx-auto text-sm sm:text-base">
          Find your next career move with competitive salaries and benefits
        </p>
      </section>

      {/* Search & Filters */}
      <section className="bg-black/50 backdrop-blur-sm rounded-xl shadow-sm p-4 sm:p-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-4 sm:gap-6">
          <div>
            <label htmlFor="job-search" className="block text-sm font-medium text-white mb-1 sm:mb-2">
              Search positions
            </label>
            <input
              id="job-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Job title, company, or location..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-sm font-medium text-white mb-2">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                href={`/categories/${toSlug(category)}`}
                className="bg-black/30 backdrop-blur-sm border border-gray-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-black/50 hover:border-blue-400 transition shadow-xs"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section>
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-black">
            Available Positions <span className="text-black">({filteredJobs.length})</span>
          </h2>
          <Link
            href="/jobs/create"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition shadow-sm text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Post a Job
          </Link>
        </div> 

        {filteredJobs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredJobs.map((job) => {
              const daysLeft = getDaysLeft(job.endDate);
              const expired = daysLeft < 0;
              const urgency = daysLeft <= 3 && !expired;

              return (
                <div
                  key={job.id}
                  className={`border rounded-xl p-4 sm:p-5 bg-black/50 backdrop-blur-sm hover:shadow-md transition-all ${
                    urgency ? 'border-l-4 border-l-orange-500' : ''
                  } ${expired ? 'opacity-80' : ''}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-base sm:text-lg font-semibold text-white mb-1">{job.title}</h2>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-base sm:text-lg font-bold text-blue-400">
                        {formatSalary(job.salary)}
                      </div>
                      {job.payType && (
                        <span className="text-xs text-gray-300 mt-1">
                          {job.payType}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Link
                      href={`/categories/${toSlug(job.category)}`}
                      className="bg-blue-900/50 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full hover:bg-blue-800/60 transition"
                    >
                      {job.category}
                    </Link>
                    {job.bonus && (
                      <span className="bg-green-900/50 text-green-200 text-xs sm:text-sm font-medium px-2 py-1 rounded">
                        + {job.bonus} bonus
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 line-clamp-3">{job.description}</p>

                  <div className="flex justify-between items-center mt-auto">
                    {expired ? (
                      <span className="text-red-400 text-xs sm:text-sm font-medium py-2">Position Closed</span>
                    ) : (
                      <Link
                        href={`/jobs/${job.id}`}
                        className="text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 px-3 sm:px-4 py-2 rounded-lg transition"
                      >
                        Apply Now
                      </Link>
                    )}
                    <span
                      className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${
                        expired
                          ? 'bg-red-900/50 text-red-200'
                          : urgency
                          ? 'bg-orange-900/50 text-orange-200 animate-pulse'
                          : 'bg-green-900/50 text-green-200'
                      }`}
                    >
                      {expired ? 'Closed' : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-black/50 backdrop-blur-sm rounded-xl shadow-sm">
            
            <h3 className="text-base sm:text-lg font-medium text-white mb-1">No matching positions</h3>
            <p className="text-gray-300 max-w-md mx-auto text-sm sm:text-base px-4">
              Try adjusting your search criteria to find more opportunities
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </div>
  );
}