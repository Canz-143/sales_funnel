import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

const CalendlySection: React.FC = () => {
  return (
    <div className="py-20 bg-white" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule a Free Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose a convenient time for a 30-minute call with one of our product specialists who will walk you through our platform and answer any questions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">What to expect</h3>
                  <p className="text-gray-700">A 30-minute personalized walkthrough of our platform tailored to your business needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Direct line</h3>
                  <p className="text-gray-700">Call us directly at (555) 123-4567 if you prefer to speak immediately.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Email us</h3>
                  <p className="text-gray-700">Send your questions to info@bluesolutions.com and we'll respond within 24 hours.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Join over 1,000+ businesses</h3>
              <p className="text-blue-700">
                who have streamlined their operations and increased productivity with our platform.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="calendly-form">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Slot</h3>
              
              {/* This would be replaced with an actual Calendly embed in production */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ACME Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold rounded-lg px-4 py-3 shadow-md hover:bg-blue-700 transition duration-300 mt-4"
                >
                  Schedule Consultation
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By scheduling, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlySection;