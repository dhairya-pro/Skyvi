import React, { useEffect, useState, useRef } from 'react';

const OurServices = () => {
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

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      title: 'Global Trade & Compliance',
      description: 'Trusted sourcing and compliance solutions to expand confidently across global markets.',
      features: [
        'Product Sourcing',
        'Market Research & Insights',
        'Compliance & Regulations'
      ],
      delay: '0ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      title: 'Logistics & Operations',
      description: 'Reliable logistics ensuring smooth, on-time delivery worldwide.',
      features: [
        'Air Freight / Ocean Freight',
        'Customs Brokerage',
        'Warehousing & Inventory'
      ],
      delay: '150ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
      title: 'Branding & Growth',
      description: 'Build strong global brands with labeling, packaging, and quality support.',
      features: [
        'Private / White Labeling',
        'Packaging & Labeling',
        'Product Line Development',
        'Quality Assurance'
      ],
      delay: '300ms'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? service.delay : '0ms'
              }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Line */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange to-orange-dark transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
