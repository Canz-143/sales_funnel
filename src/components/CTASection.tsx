import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'final';
  id?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ variant = 'primary', id }) => {
  const benefits = [
    "Increase efficiency by up to 40%",
    "Reduce operational costs by 25-30%",
    "Boost customer satisfaction by 50%",
    "30-day money-back guarantee"
  ];

  if (variant === 'primary') {
    return (
      <div className="py-16 bg-white" id={id}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white">
                  Ready to transform your business operations?
                </h2>
                <p className="mt-4 text-xl text-blue-100 max-w-2xl">
                  Join hundreds of companies that have streamlined their workflow and boosted productivity with {COMPANY_NAME}.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <a 
                  href="#calendar" 
                  className="inline-block bg-white text-blue-600 font-bold rounded-lg px-8 py-4 text-lg shadow-lg hover:bg-blue-50 transition duration-300"
                >
                  Schedule Your Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'secondary') {
    return (
      <div className="py-16 bg-gray-50" id={id}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-8 md:p-12 flex flex-col md:flex-row">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900">
                  See the difference for yourself
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Our clients typically see results within the first 30 days.
                </p>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center md:justify-end">
                <a 
                  href="#calendar" 
                  className="inline-block bg-blue-600 text-white font-bold rounded-lg px-8 py-4 text-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Final CTA variant
  return (
    <div className="py-20 bg-gradient-to-r from-blue-700 to-blue-500" id={id}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start Optimizing Your Business Today
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join the thousands of successful businesses that have transformed their operations with our platform.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule your free 30-minute consultation and see how we can help your business grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="#calendar" 
            className="block w-full bg-blue-600 text-white font-bold rounded-lg px-8 py-4 text-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Book Your Free Consultation
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            No credit card required. No obligation to purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;