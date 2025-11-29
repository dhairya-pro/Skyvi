import React from 'react';
import GuidingPrinciples from '../about-page/GuidingPrinciples';
import JourneyTimeline from '../about-page/JourneyTimeline';
import LeadershipTeam from '../about-page/LeadershipTeam';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Image - Warehouse/Logistics */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')` 
          }}
        ></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-navy/70"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Connection Global Markets<br />
            <span className="text-white">With</span>
            <span className="text-orange"> Trust & Innovation</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We are a full-service logistics firm dedicated to streamlining your supply chain. We combine 
            advanced technology with deep industry expertise to move your goods efficiently and 
            reliably. Trusted by brands across 15+ countries, we are committed to being your strategic 
            partner in global trade.
          </p>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <GuidingPrinciples />

      {/* Journey Timeline Section */}
      <JourneyTimeline />

      {/* Leadership Team Section */}
      {/* <LeadershipTeam /> */}
    </div>
  );
};

export default About;