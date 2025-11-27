import React, { useEffect, useState } from 'react';
import { Ship, Plane, Truck, Train } from 'lucide-react';

const TransportationServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before triggering animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Ship,
      title: 'OCEAN',
      subtitle: 'TRANSPORTATION',
    },
    {
      icon: Plane,
      title: 'AIRWAYS',
      subtitle: 'TRANSPORTATION',
    },
    {
      icon: Truck,
      title: 'ROAD',
      subtitle: 'TRANSPORTATION',
    },
    {
      icon: Train,
      title: 'TRAIN',
      subtitle: 'TRANSPORTATION',
    },
  ];

  return (
    <div className="relative -mt-20 z-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-medium p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 text-orange group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 ease-out">
                    <Icon size={64} strokeWidth={1.5} className="w-full h-full" />
                  </div>
                  <h3 className="text-navy font-bold text-base sm:text-lg group-hover:text-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-navy font-semibold text-xs sm:text-sm opacity-80">
                    {service.subtitle}
                  </p>
                  
                  {/* Hover underline effect */}
                  <div className="w-0 h-0.5 bg-orange mt-2 group-hover:w-12 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationServices;
