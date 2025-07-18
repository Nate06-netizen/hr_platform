import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'HR Platform',
  description: 'A frontend-only HR platform MVP built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-hero min-h-screen">
        <header className="bg-white/80 shadow p-4 sticky top-0 z-50 backdrop-blur-sm">
          <Navbar />
        </header>

        <main className="max-w-6xl mx-auto py-10 px-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}