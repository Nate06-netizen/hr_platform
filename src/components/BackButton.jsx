'use client';
import { useRouter } from 'next/navigation';

export default function BackButton({ className = '' }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`group flex items-center text-blue-600 hover:text-blue-800 transition-colors ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
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
      Go Back
    </button>
  );
}
