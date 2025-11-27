import React, { useEffect, useState, useRef } from 'react';
import { Globe, Telescope, Gem } from 'lucide-react';

const GuidingPrinciples = () => {
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

  const principles = [
    {
      icon: Globe,
      title: 'Mission',
      description: 'To empower global trade through seamless logistics and innovative solutions.',
      color: 'from-orange-400 to-orange-600',
      delay: '0ms'
    },
    {
      icon: Telescope,
      title: 'Vission',
      description: 'To be the most trusted and forward-thinking logistics partner worldwide.',
      color: 'from-orange-400 to-orange-600',
      delay: '200ms'
    },
    {
      icon: Gem,
      title: 'Values',
      description: 'Integrity, Innovation, Customer-Centricity, Sustainability.',
      color: 'from-orange-400 to-orange-600',
      delay: '400ms'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The foundation of every decision we make and every partnership we build.
          </p>
        </div>

        {/* Principles Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? principle.delay : '0ms'
                }}
              >
                {/* Icon */}
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <Icon className="text-white" size={40} strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg">
                  {principle.description}
                </p>

                {/* Decorative Bottom Border */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange to-orange-dark transition-all duration-500 mx-auto rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
