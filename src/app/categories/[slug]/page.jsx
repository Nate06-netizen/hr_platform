// app/categories/[slug]/page.jsx
'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import jobs from "@/data/jobs";
import JobCard from "@/components/JobCard";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoryDetailPage({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Convert slug back to proper category name
  const matchingJobs = jobs.filter(
    (job) => slugify(job.category) === slug
  );

  const categoryName = matchingJobs[0]?.category || "Unknown";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center text-white hover:text-blue-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        <div className="max-w-4xl mx-auto mt-6">
          <h1 className="text-3xl font-bold mt-4">{categoryName}</h1>
          <p className="text-blue-100 mt-2">{matchingJobs.length} jobs available</p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto p-6">
        {matchingJobs.length === 0 ? (
          <div className="text-center text-gray-500">No jobs found in this category.</div>
        ) : (
          <div className="grid gap-6">
            {matchingJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
