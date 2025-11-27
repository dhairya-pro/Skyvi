import React, { useEffect, useState, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div 
          className={`relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b5f] via-[#2d4a8f] to-[#5b7bc4]"></div>
          
          {/* World Map Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg 
              viewBox="0 0 1000 400" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified world map paths */}
              <path 
                d="M100,150 Q150,100 200,120 T300,140 L350,160 Q400,180 450,170 T550,150 L600,140 Q650,130 700,145 T800,160 L850,170 Q900,180 950,165" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                className="text-white"
              />
              <path 
                d="M50,200 Q100,180 150,195 T250,210 L300,220 Q350,230 400,215 T500,200 L550,190 Q600,180 650,195 T750,210 L800,220 Q850,230 900,215 T950,200" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                className="text-white"
              />
              <circle cx="200" cy="120" r="3" fill="currentColor" className="text-white" />
              <circle cx="400" cy="180" r="3" fill="currentColor" className="text-white" />
              <circle cx="600" cy="140" r="3" fill="currentColor" className="text-white" />
              <circle cx="800" cy="160" r="3" fill="currentColor" className="text-white" />
              <circle cx="150" cy="195" r="2" fill="currentColor" className="text-white" />
              <circle cx="350" cy="230" r="2" fill="currentColor" className="text-white" />
              <circle cx="550" cy="190" r="2" fill="currentColor" className="text-white" />
              <circle cx="750" cy="210" r="2" fill="currentColor" className="text-white" />
            </svg>
          </div>

          {/* Decorative Dots Pattern */}
          <div className="absolute top-10 right-10 opacity-20">
            <div className="grid grid-cols-4 gap-3">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
            {/* Heading */}
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Let's Scale Your Business Globally
            </h2>

            {/* Subtext */}
            <p 
              className={`text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From sourcing to Delivery, we provide end-to-end-solutions designed for success
            </p>

            {/* Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Get a Quote Button */}
              <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange to-orange-dark text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange/50 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Contact Us Button */}
              <button className="group px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-navy hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>

          {/* Bottom Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="w-full h-full"
            >
              <path 
                d="M0,60 Q300,90 600,60 T1200,60 L1200,120 L0,120 Z" 
                fill="currentColor" 
                className="text-white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
