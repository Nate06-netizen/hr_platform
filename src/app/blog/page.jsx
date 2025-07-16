'use client';

export default function BlogPage() {
  const posts = [
    {
      title: 'How to Write a Job-Winning Resume',
      date: 'June 10, 2025',
      tag: 'Career Tips',
      content: `Your resume isn't just a document, it's a pitch. And in today's job market, you've got only a few seconds to grab a recruiter's attention. That means every word, every bullet point, and every section must serve a clear purpose.

Structure matters. Use a clean layout that includes your name and contact info, a short professional summary, relevant work experience, skills, education, and any certifications or projects.

Tailor it for each application. Don't send the same resume everywhere. Match the language of the job description and include keywords where they naturally fit.

Focus on results, not just duties. Rather than saying "managed social media," say something like "grew LinkedIn engagement by 240% in six months through targeted content strategy."

Finally, keep it clean and clutter-free. Use professional fonts, and avoid unnecessary graphics or colors. Your resume should be easy to read and highlight what truly matters.

A strong resume doesn't just show what you've done, it explains why it matters.`,
    },
    {
      title: 'Frontend Roles to Watch in 2025',
      date: 'June 5, 2025',
      tag: 'Tech Trends',
      content: `Frontend development has come a long way, and in 2025, it's evolving faster than ever. It's no longer just about building interfaces, it's about performance, accessibility, design thinking, and real-time interaction.

Emerging tools like React Server Components and Astro are helping developers write faster, leaner code. Frameworks are focusing more on performance and minimal JavaScript delivery. Design tokens are bridging the gap between designers and developers.

Companies now want frontend engineers who can think like designers, understand accessibility, and optimize the user experience for both speed and clarity.

If you want to stay competitive, go beyond just coding layouts. Learn about animations, motion design, responsive accessibility, and performance optimization. It's not just about building UIs, it's about crafting seamless digital experiences.`,
    },
    {
      title: 'What Recruiters Actually Look For',
      date: 'May 30, 2025',
      tag: 'HR Insights',
      content: `When recruiters scan applications, they're not just looking for hard skills. They want to understand how you think, how you communicate, and how well you align with the company's goals.

Clarity is more important than complexity. A well-structured application that clearly explains what you did and the impact you had will always stand out.

Relevance is key. Tailor your resume and cover letter to the specific role. Use real examples that show how your experience aligns with what the job requires.

Recruiters also value consistency. Make sure your story adds up across your resume, LinkedIn, and portfolio. They want to see that your growth is intentional and your choices make sense.

Most importantly, back your claims. Don't just say you're a team player, show an example where collaboration led to results. Don't say you solve problems, explain one you solved and how.`,
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
        HireHub Blog
      </h1>

      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs sm:text-sm">
                {post.tag}
              </span>
              <time className="text-gray-500 text-xs sm:text-sm">{post.date}</time>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {post.title}
            </h2>

            <div className="prose prose-sm sm:prose max-w-none text-gray-600">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4 text-sm sm:text-base leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
