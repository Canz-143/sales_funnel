import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const SocialProofSection: React.FC = () => {
  return (
    <div className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses that have transformed their operations with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100 flex flex-col h-full transition duration-300 hover:shadow-md"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill={i < testimonial.rating ? "#FBBF24" : "none"} 
                    stroke={i < testimonial.rating ? "#FBBF24" : "#CBD5E1"} 
                    className="w-5 h-5" 
                  />
                ))}
              </div>
              
              <blockquote className="flex-grow">
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Trusted by Industry Leaders</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['ACME Inc.', 'TechCorp', 'GrowthBiz', 'InnovateNow', 'FutureTech'].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-blue-600">
              <span className="font-bold text-2xl">97%</span>
              <span className="text-lg">Customer Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;