import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'HR Platform',
  description: 'A frontend-only HR platform MVP built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-hero min-h-screen">
        <header className="bg-white/80 shadow p-4 sticky top-0 z-50 backdrop-blur-sm">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold whitespace-nowrap">HireHub</h1>
            <div className="space-x-4 flex items-center text-base font-semibold">
              <Link href="/" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">Home</Link>
              <Link href="/jobs" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">Jobs</Link>
              <Link href="/contact" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">Contact</Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">About Us</Link>
              <Link href="/blog" className="text-gray-800 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">Blog</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto py-10 px-4">
          {children}
        </main>

        <footer className="text-center p-6 text-sm font-bold text-black bg-black/40 border-t mt-10">
          &copy; {new Date().getFullYear()} HireHub Platform. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
