import React, { useEffect, useState } from 'react';
import TransportationServices from '../components/TransportationServices';
import { ArrowRight } from 'lucide-react';
import WhoWeAre from '../home-page/WhoWeAre';
import StatsBar from '../home-page/StatsBar';
import CoreServices from '../home-page/CoreServices';
import WhyChooseUs from '../home-page/WhyChooseUs';
import ContactPage from '../home-page/ContactPage';
import homepage1 from '../assets/home-page1.jpg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homepage1})` }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/85 to-orange/40"></div>
        
        {/* Radial Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]"></div>

        {/* Animated Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-orange/5 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Animated Heading */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Your <span className="text-orange bg-clip-text animate-gradient-shift">Global Partner</span> for<br className="hidden sm:block" />
              <span className="block sm:inline"> Smarter Sourcing & Seamless Trade</span>
            </h1>
            
            {/* Animated Subtitle */}
            <p 
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From sourcing to shipping, SKYVI INTERNATIONAL simplifies your global supply chain.
            </p>
            
            {/* Animated Button */}
            <button 
              className={`bg-orange hover:bg-orange-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span>Explore More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative Elements with Animation */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 animate-pulse-slow">
          <div className="absolute inset-0 bg-gradient-to-tl from-orange to-transparent"></div>
        </div>
        
        {/* Additional Decorative Gradient */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
        </div>
      </section>

      {/* Transportation Services with Scroll Animation */}
      <div 
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <TransportationServices />
        <WhoWeAre />
        <StatsBar />
        <CoreServices />
        <WhyChooseUs />
        <ContactPage />
      </div>

      {/* Additional spacing before footer */}
      <div className="h-12 sm:h-16 md:h-20"></div>
    </>
  );
};

export default Home;
