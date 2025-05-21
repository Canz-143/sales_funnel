import React from 'react';
import { PROBLEMS } from '../constants';
import * as LucideIcons from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <div className="py-20 bg-white" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Challenges Businesses Face Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's fast-paced business environment, these common problems can significantly impact your growth and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {PROBLEMS.map((problem) => {
            // Dynamically get the icon from Lucide
            const IconComponent = LucideIcons[problem.icon as keyof typeof LucideIcons];
            
            return (
              <div 
                key={problem.id} 
                className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100 transform transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent className="h-7 w-7 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-blue-800 font-semibold">
            These challenges cost businesses an average of $250,000 annually in lost revenue and opportunities.
          </p>
          <div className="mt-8">
            <a 
              href="#solution" 
              className="bg-blue-600 text-white font-bold rounded-lg px-8 py-4 text-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Discover the Solution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;