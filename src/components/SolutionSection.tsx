import React from 'react';
import { FEATURES } from '../constants';
import * as LucideIcons from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Streamlined Solutions for Business Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform addresses these challenges with powerful yet easy-to-use features.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid gap-6">
              {FEATURES.map((feature) => {
                // Dynamically get the icon from Lucide
                const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons];
                
                return (
                  <div 
                    key={feature.id} 
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex transition duration-300 hover:shadow-md"
                  >
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-xl transform -rotate-2"></div>
              <div className="absolute inset-0 bg-blue-400 rounded-xl transform rotate-2"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our platform in action" 
                className="relative rounded-xl shadow-xl z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="text-blue-600 font-bold text-lg">98%</div>
                <div className="text-gray-700 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;