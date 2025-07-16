'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JobCard({ job }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setIsSaved(savedJobs.includes(job.id));
  }, [job.id]);

  const handleSave = () => {
    let saved = JSON.parse(localStorage.getItem('savedJobs')) || [];

    if (saved.includes(job.id)) return;

    saved.push(job.id);
    localStorage.setItem('savedJobs', JSON.stringify(saved));
    setIsSaved(true);
  };

  return (
    <div className="border rounded-lg shadow-sm p-5 bg-white hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
      <p className="text-gray-600 text-sm mb-1">{job.company} • {job.location}</p>

      {/* CATEGORY LINK */}
      <Link
        href={`/categories/${job.category.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mb-3 hover:underline"
      >
        {job.category}
      </Link>

      <p className="text-sm text-gray-700 line-clamp-3">
        {job.description.slice(0, 100)}...
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-md transition duration-150 ease-in-out shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span>Learn More</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        <button
          onClick={handleSave}
          disabled={isSaved}
          aria-label={isSaved ? 'Job already saved' : 'Save this job'}
          className={`text-sm px-4 py-2 rounded ${
            isSaved
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {isSaved ? 'Saved' : 'Save Job'}
        </button>
      </div>
    </div>
  );
}
