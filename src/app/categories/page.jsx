// app/categories/page.jsx
import Link from "next/link";
import jobs from "@/data/jobs";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoriesPage() {
  // Extract unique categories from job data
  const uniqueCategories = Array.from(
    new Set(jobs.map((job) => job.category))
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white text-center bg-gradient-to-r from-blue-800 to-indigo-900 py-6 sm:py-8 rounded-xl shadow-lg">
          Job Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {uniqueCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${slugify(category)}`}
              className="group border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-700 mb-2">
                {category}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Explore jobs in {category}
              </p>
              <div className="mt-4 flex justify-end">
                <span className="text-blue-600 text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {uniqueCategories.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 text-sm sm:text-base">
              No categories available at the moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
