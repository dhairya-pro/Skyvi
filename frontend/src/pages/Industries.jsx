import React from 'react';
import ExpertiseSection from '../industries/ExpertiseSection';
import SuccessStories from '../industries/SuccessStories';
const Industries = () => {
  return (
    <>
      {/* Hero Section with Industries Grid */}
      <ExpertiseSection />

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss your specific needs.
            </p>
            <button className="bg-gradient-to-r from-orange to-orange-dark hover:shadow-2xl hover:shadow-orange/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <SuccessStories />
    </>
  );
};

export default Industries;

