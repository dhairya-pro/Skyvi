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
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
      title: 'Electronics & Gadgets',
      description: 'Cutting-edge electronics and smart devices sourced from top manufacturers.',
      features: [
        'Smartphones & Tablets',
        'Smart Home Devices',
        'Audio & Wearables',
        'Computer Accessories'
      ],
      delay: '0ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      title: 'Home & Kitchen Essentials',
      description: 'Quality home and kitchen products to enhance everyday living.',
      features: [
        'Cookware & Utensils',
        'Home Decor Items',
        'Storage Solutions',
        'Kitchen Appliances'
      ],
      delay: '100ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1558877385-8c7f8c6e1b9f?w=800&q=80',
      title: 'Toys & Kids Products',
      description: 'Safe, fun, and educational toys for children of all ages.',
      features: [
        'Educational Toys',
        'Outdoor Play Equipment',
        'Baby Care Products',
        'Action Figures & Dolls'
      ],
      delay: '200ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      title: 'Beauty, Health & Personal Care',
      description: 'Premium beauty and wellness products for personal care.',
      features: [
        'Skincare & Cosmetics',
        'Hair Care Products',
        'Health Supplements',
        'Personal Hygiene Items'
      ],
      delay: '300ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80',
      title: 'Tools, Hardware & Auto Accessories',
      description: 'Durable tools and automotive accessories for professionals and enthusiasts.',
      features: [
        'Power & Hand Tools',
        'Hardware & Fasteners',
        'Car Accessories',
        'Automotive Parts'
      ],
      delay: '400ms'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      title: 'Lifestyle, Gifts & Fashion Accessories',
      description: 'Trendy fashion accessories and unique gift items for every occasion.',
      features: [
        'Fashion Jewelry',
        'Bags & Wallets',
        'Watches & Sunglasses',
        'Gift Items & Novelties'
      ],
      delay: '500ms'
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
