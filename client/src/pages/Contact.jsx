import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaHeadset, FaComments, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our friendly team is here to help with any questions about our mentorship programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>

          {/* Character and Contact Details */}
          <div className="space-y-8">
            {/* Friendly Character Illustration */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-50 rounded-2xl p-8 flex flex-col items-center">
              <div className="w-40 h-40 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                <FaHeadset className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hi there!</h3>
              <p className="text-gray-600 text-center">I'm Sarah, your mentorship guide. How can I help you today?</p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaComments className="text-blue-500 mr-2" />
                  Quick Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Call us directly</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Email us</p>
                      <p className="text-gray-600">support@mentormente.com</p>
                      <p className="text-sm text-gray-500 mt-1">Typically reply within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  Our Location
                </h3>
                <div className="flex items-start">
                  <div className="mr-3 text-blue-500">
                    <FaMapMarkerAlt className="mt-1" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">MentorMente HQ</p>
                    <p className="text-gray-600">123 Education Avenue</p>
                    <p className="text-gray-600">Boston, MA 02108</p>
                    <p className="text-sm text-gray-500 mt-2">Open for visits by appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;