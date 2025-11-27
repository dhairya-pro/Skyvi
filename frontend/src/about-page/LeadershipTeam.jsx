import React, { useEffect, useState, useRef } from 'react';

const LeadershipTeam = () => {
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

  const leaders = [
    {
      name: 'Leader 1 Name',
      role: 'Team of trade experts',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop',
      delay: '0ms'
    },
    {
      name: 'Leader 2 Name',
      role: 'Sourcing Specialists',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&fit=crop',
      delay: '200ms'
    },
    {
      name: 'Leader 3 Name',
      role: 'Logistics Managers',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
      delay: '400ms'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of industry experts committed to your success
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: leader.delay }}
            >
              {/* Card Container */}
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-orange/5 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-500"></div>
                
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-orange/30 transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full border-2 border-orange/30 scale-110 group-hover:scale-115 transition-transform duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy mb-2 group-hover:text-orange transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 font-medium">
                    {leader.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
