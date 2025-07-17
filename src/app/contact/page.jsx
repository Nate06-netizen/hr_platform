'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl w-full bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Previous Page</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Us</h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We'd love to hear from you, whether you're a job seeker, employer, or just curious about HireHub.
                Our team is ready to assist you with any questions or feedback.
              </p>
              
              <div className="space-y-4 sm:space-y-5">
                <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+234 801 234 5678</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">support@hirehub.com</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Office</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    123 Innovation Blvd, Suite 500<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-3">Business Hours</h3>
              <div className="flex justify-between border-b border-gray-200 py-2 text-sm sm:text-base">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2 text-sm sm:text-base">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you promptly</p>
            </div>
            
            {submitSuccess ? (
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-200 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 text-sm sm:text-base">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base text-white font-medium shadow-md transition ${
                      isSubmitting 
                        ? 'bg-indigo-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                <div className="text-center text-xs sm:text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <p>We'll respond to your inquiry within 24 business hours</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}