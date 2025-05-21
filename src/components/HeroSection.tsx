import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroProps } from '../types';

const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt,
  trustedBy
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href={primaryCTA.href}
                className="bg-white text-blue-600 font-bold rounded-lg px-8 py-4 text-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                {primaryCTA.text} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href={secondaryCTA.href}
                className="bg-transparent text-white border-2 border-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center"
              >
                {secondaryCTA.text}
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="font-medium">Trusted by industry leaders worldwide</p>
              <div className="mt-4 flex flex-wrap gap-8 items-center">
                {trustedBy.map((company, index) => (
                  <div key={index} className="h-8 bg-white bg-opacity-20 px-4 py-6 rounded flex items-center">
                    <span className="font-bold text-white">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-xl transform rotate-3 scale-105"></div>
              <img 
                src={image}
                alt={imageAlt}
                className="relative z-10 rounded-xl shadow-2xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,58.7C960,43,1056,21,1152,16C1248,11,1344,21,1392,26.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;