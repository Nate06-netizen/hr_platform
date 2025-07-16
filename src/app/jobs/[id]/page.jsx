'use client';

import { useParams, useRouter } from 'next/navigation';
import { use } from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import jobs from '@/data/jobs';

export default function JobDetailsPage({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const jobId = parseInt(resolvedParams.id);
  const job = jobs.find((j) => j.id === jobId);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setIsSaved(savedJobs.includes(jobId));
  }, [jobId]);

  const handleSaveToggle = () => {
    let saved = JSON.parse(localStorage.getItem('savedJobs')) || [];

    if (saved.includes(jobId)) {
      saved = saved.filter((id) => id !== jobId);
      setIsSaved(false);
    } else {
      saved.push(jobId);
      setIsSaved(true);
    }

    localStorage.setItem('savedJobs', JSON.stringify(saved));
  };

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(salary);
  };

  const getDaysLeft = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  if (!job) return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-10">
      <div className="text-gray-500 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Job not found</h2>
        <p className="text-sm sm:text-base">The job you're looking for doesn't exist or has been removed.</p>
        <Link href="/jobs" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors">
          Browse all jobs
          <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 px-4">
      <main className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section with Back Button */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sm:p-8">
          <button
            onClick={() => router.back()}
            className="group mb-4 text-blue-100 hover:text-white flex items-center gap-2 text-sm sm:text-base transition-colors"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span>
            Back to Jobs
          </button>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{job.title}</h1>
              <p className="text-blue-100 text-sm sm:text-base">{job.company}</p>
            </div>
            <div className="flex items-center gap-4">
              {job.endDate && (
                <div className={`text-sm sm:text-base px-3 py-1 rounded-full ${
                  getDaysLeft(job.endDate) > 7
                    ? 'bg-green-500/20 text-green-100'
                    : getDaysLeft(job.endDate) > 3
                    ? 'bg-yellow-500/20 text-yellow-100'
                    : 'bg-red-500/20 text-red-100'
                } animate-pulse`}>
                  {getDaysLeft(job.endDate)} days left
                </div>
              )}
              <button
                onClick={handleSaveToggle}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                  ${isSaved 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                  } transition-all duration-300 ease-in-out transform hover:scale-105`}
              >
                <svg className={`w-4 h-4 ${isSaved ? 'fill-current' : 'stroke-current fill-none'} transition-all duration-300`} viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm sm:text-base">{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <span className="text-gray-600 text-xs sm:text-sm">Location</span>
              <p className="font-medium text-sm sm:text-base">{job.location}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <span className="text-gray-600 text-xs sm:text-sm">Salary</span>
              <p className="font-medium text-sm sm:text-base">{formatSalary(job.salary)}/year</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md sm:col-span-2 md:col-span-1">
              <span className="text-gray-600 text-xs sm:text-sm">Employment Type</span>
              <p className="font-medium text-sm sm:text-base">{job.type}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Job Description</h2>
            <div className="prose prose-sm sm:prose max-w-none">
              {job.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-600 text-sm sm:text-base">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="pt-6">
            <Link
              href={`/jobs/${job.id}/apply`}
              className="group inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Apply for this Position</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
