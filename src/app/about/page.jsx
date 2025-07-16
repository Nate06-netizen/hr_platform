import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 sm:p-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
          About HireHub
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto font-medium">
          Where meaningful connections happen - humanizing the hiring experience since 2016
        </p>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-50 p-8 text-center rounded-2xl shadow-sm">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl italic font-medium text-gray-800">
            "Great hires aren't made from resumes - they're built through genuine connections."
          </p>
          <p className="mt-6 text-lg text-gray-700">
            We're rewriting the rules of recruitment by transforming hiring from a transactional chore 
            into a human-centered experience.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
          <p className="text-lg text-gray-700">
            Born in <strong className="text-blue-700">2016</strong> from frustration with cluttered job boards 
            and impersonal hiring processes, HireHub was built on a simple belief: 
            <span className="block mt-2 font-medium text-gray-800">Hiring should feel human, not algorithmic.</span>
          </p>
          <p className="text-gray-700">
            We started with a small team of designers and developers who refused to accept that 
            candidates should feel overwhelmed or recruiters should feel exhausted. Today, we serve 
            <span className="text-blue-700 font-semibold"> 50,000+ companies</span> and 
            <span className="text-blue-700 font-semibold"> 3 million professionals</span> worldwide.
          </p>
        </div>
        {/* Founder/Team Image */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src="/banner.jpg"
            alt="HireHub Team"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-blue-100"
          />
        </div>
      </section>


      {/* Value Propositions */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Speed */}
        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Speed Without Sacrifice</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Candidates apply in 3 clicks</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Recruiters post jobs quickly</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Real-time application tracking</span>
            </li>
          </ul>
        </div>

        {/* Simplicity */}
        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Simplicity by Design</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Zero ad clutter, zero feature bloat</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Intuitive interface that needs no tutorial</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Mobile-optimized for on-the-go opportunities</span>
            </li>
          </ul>
        </div>

        {/* Transparency */}
        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Transparency You Trust</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">No ghosting policy</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Clear salary ranges upfront</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">Authentic company profiles</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Dual Perspective */}
      <section className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        {/* Job Seekers */}
        <div className="lg:w-1/2 bg-indigo-50 p-8 text-center rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">For Job Seekers</h2>
          <ul className="space-y-3 inline-block text-left">
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">Curated opportunities matching your skills</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">One-click application with progress tracking</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">Salary transparency before you apply</span>
            </li>
          </ul>
        </div>

        {/* For Employers */}
        <div className="lg:w-1/2 bg-blue-50 p-8 text-center rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">For Employers</h2>
          <ul className="space-y-3 inline-block text-left">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">Access to a pool of qualified candidates</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">Streamlined hiring process</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 rounded-full">→</span>
              <span className="text-gray-700">Advanced candidate filtering tools</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Core Difference */}
      <section className="text-center max-w-3xl mx-auto py-8">
        <h2 className="inline-block text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent px-6 py-2">The HireHub Difference</h2>
        <p className="inline-block text-lg mb-8 text-gray-800 font-medium bg-gray-50 px-6 py-3 rounded-xl shadow-sm">
          We reject the "more features = better" mentality. Instead, we focus on what actually matters:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Removing friction', 'Human experience', 'Tools that serve people', 'Authentic connections'].map((item) => (
            <div key={item} className="bg-gray-50 py-4 px-4 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Link */}
      <section className="text-center py-10 flex flex-col items-center">
        <div className="inline-block text-xl mb-7 text-gray-800 font-medium bg-blue-50 px-8 py-4 rounded-xl shadow-sm">
          Discover how professionals have found their ideal roles through HireHub
          <div className="mt-4">
            <Link
              href="/success-stories"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 font-medium hover:opacity-90 transition rounded-lg text-base"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}