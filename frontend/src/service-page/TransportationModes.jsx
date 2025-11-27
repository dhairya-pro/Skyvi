  import React, { useEffect, useState, useRef } from 'react';
import { Ship, Plane, Truck, Train } from 'lucide-react';

const TransportationModes = () => {
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

  const transportModes = [
    {
      icon: Ship,
      title: 'OCEAN',
      subtitle: 'TRANSPORTATION',
      color: 'from-orange-400 to-orange-600',
      delay: '0ms'
    },
    {
      icon: Plane,
      title: 'AIRWAYS',
      subtitle: 'TRANSPORTATION',
      color: 'from-orange-400 to-orange-600',
      delay: '150ms'
    },
    {
      icon: Truck,
      title: 'ROAD',
      subtitle: 'TRANSPORTATION',
      color: 'from-orange-400 to-orange-600',
      delay: '300ms'
    },
    {
      icon: Train,
      title: 'TRAIN',
      subtitle: 'TRANSPORTATION',
      color: 'from-orange-400 to-orange-600',
      delay: '450ms'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative -mt-16 sm:-mt-20 md:-mt-24 pb-16 sm:pb-20 md:pb-24 z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transportation Cards Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {transportModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <div
                  key={index}
                  className={`group flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? mode.delay : '0ms'
                  }}
                >
                  {/* Icon Container */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl`}>
                    <Icon className="text-white" size={32} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy mb-1">
                    {mode.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm md:text-base text-navy font-medium opacity-80">
                    {mode.subtitle}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-3 sm:mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange to-orange-dark transition-all duration-500 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationModes;
