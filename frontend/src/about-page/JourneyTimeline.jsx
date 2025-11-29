import React, { useEffect, useState, useRef } from 'react';

const JourneyTimeline = () => {
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

  const milestones = [
    {
      year: '2019:',
      title: 'Founded in India',
      position: 'bottom',
      delay: '0ms'
    },
    {
      year: '2020:',
      title: 'Expand to China Network',
      position: 'top',
      delay: '150ms'
    },
    {
      year: '2021:',
      title: 'Established Business Office and Warehouse in China',
      position: 'bottom',
      delay: '300ms'
    },
    {
      year: '2022:',
      title: 'Crossed 1000+ Shipments',
      position: 'top',
      delay: '450ms'
    },
    {
      year: '2023:',
      title: 'Added Private Label & Packaging Solutions',
      position: 'bottom',
      delay: '600ms'
    },
    {
      year: '2024:',
      title: 'OEM, ODM & Product Research',
      position: 'top',
      delay: '750ms'
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
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            Our Journey Of Growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating key achievements that have shaped our path
          </p>
        </div>

        {/* Desktop Timeline - Hidden on mobile */}
        <div className="hidden lg:block relative">
          {/* Curved Line SVG */}
          <div className="relative h-80">
            <svg 
              className="w-full h-full absolute top-0 left-0"
              viewBox="0 0 1200 300"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated curved path - Smoother wave with 6 points */}
              <path
                d="M 50 220 Q 120 100, 200 180 Q 280 260, 400 150 Q 520 40, 600 120 Q 680 200, 800 100 Q 920 0, 1000 80 Q 1080 160, 1150 60"
                stroke="#FF6B35"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-2000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: 2500,
                  strokeDashoffset: isVisible ? 0 : 2500,
                  transition: 'stroke-dashoffset 2.5s ease-in-out'
                }}
              />
              
              {/* Milestone dots positioned on the curve */}
              <circle cx="50" cy="220" r="10" fill="#FF6B35" className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="200" cy="180" r="10" fill="#FF6B35" className={`transition-all duration-500 delay-150 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="400" cy="150" r="10" fill="#FF6B35" className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="600" cy="120" r="10" fill="#FF6B35" className={`transition-all duration-500 delay-450 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="800" cy="100" r="10" fill="#FF6B35" className={`transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="1000" cy="80" r="10" fill="#FF6B35" className={`transition-all duration-500 delay-750 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              
              {/* White border circles for better visibility */}
              <circle cx="50" cy="220" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="200" cy="180" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 delay-150 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="400" cy="150" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="600" cy="120" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 delay-450 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="800" cy="100" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              <circle cx="1000" cy="80" r="12" fill="none" stroke="white" strokeWidth="3" className={`transition-all duration-500 delay-750 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
            </svg>
          </div>

          {/* Milestone Cards - Positioned to align with dots */}
          <div className="relative grid grid-cols-6 gap-2 px-4">
            {/* 2019 - Bottom */}
            <div className="flex flex-col items-start pt-4">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2019:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  Founded in<br />India
                </div>
              </div>
            </div>

            {/* 2020 - Top */}
            <div className="flex flex-col items-start -mt-24">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2020:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  Expand to<br />China Network
                </div>
              </div>
            </div>

            {/* 2021 - Bottom */}
            <div className="flex flex-col items-start pt-8">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2021:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  Established Office<br />& Warehouse in China
                </div>
              </div>
            </div>

            {/* 2022 - Top */}
            <div className="flex flex-col items-start -mt-28">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '450ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2022:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  Crossed 1000+<br />Shipments
                </div>
              </div>
            </div>

            {/* 2023 - Bottom */}
            <div className="flex flex-col items-start pt-12">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2023:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  Added Private Label<br />& Packaging Solutions
                </div>
              </div>
            </div>

            {/* 2024 - Top */}
            <div className="flex flex-col items-start -mt-32">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '750ms' }}
              >
                <div className="text-2xl xl:text-3xl font-bold text-orange mb-2">
                  2024:
                </div>
                <div className="text-navy font-semibold text-sm xl:text-base leading-tight">
                  OEM, ODM &<br />Product Research
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative pl-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: milestone.delay }}
                >
                  {/* Dot */}
                  <div className="absolute left-5 top-2 w-8 h-8 bg-orange rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl sm:text-4xl font-bold text-orange mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-navy font-medium text-lg sm:text-xl">
                      {milestone.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
