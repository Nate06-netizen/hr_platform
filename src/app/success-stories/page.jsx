// app/success-stories/page.jsx
'use client';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Alex Johnson",
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      quote: "I landed my dream role at a FAANG company within two weeks of using HireHub! The platform's direct application process saved me hours of redundant form filling.",
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager",
      company: "Future Labs",
      quote: "The streamlined application process helped me secure multiple offers within a month. I especially appreciated the salary transparency on every listing.",
    },
    {
      name: "Chinedu Okoro",
      role: "IoT Solutions Architect",
      company: "Smart Systems Ltd",
      quote: "After 3 months of fruitless searching, I found my ideal position through HireHub. The verified listings gave me confidence I was applying to legitimate opportunities.",
    },
    {
      name: "Fatima Ahmed",
      role: "AI Research Scientist",
      company: "NexGen AI",
      quote: "HireHub's clean interface made my job search efficient. I applied to 15 relevant positions in one afternoon and received 5 interview invitations.",
    },
    {
      name: "Emeka Nwankwo",
      role: "Robotics Engineer",
      company: "Automation Pioneers",
      quote: "The deadline indicators helped me prioritize applications. I landed a position with a 40% salary increase thanks to the transparent compensation details.",
    },
    {
      name: "Amina Mohammed",
      role: "Cloud Infrastructure Engineer",
      company: "CloudScape Technologies",
      quote: "As a remote worker, HireHub's location filters saved me countless hours. I found 3 perfect remote opportunities that weren't listed on other platforms.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-3 sm:mb-4">
            Success Stories
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real stories from professionals who found their dream roles through HireHub
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg sm:text-xl">{story.name}</h3>
                  <span className="text-blue-600">★</span>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-600 font-medium text-sm sm:text-base">{story.role}</p>
                  <p className="text-gray-500 text-sm">{story.company}</p>
                </div>
              </div>
              
              <blockquote className="relative">
                <span className="absolute top-0 left-0 text-4xl text-blue-200">"</span>
                <p className="text-gray-600 italic pl-6 text-sm sm:text-base leading-relaxed">
                  {story.quote}
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/jobs"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base"
          >
            Start Your Success Story
          </Link>
        </div>
      </div>
    </main>
  );
}