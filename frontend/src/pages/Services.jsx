import React from 'react';
import ServicesHero from '../service-page/ServicesHero';
import OurServices from '../service-page/OurServices';    
import TransportationModes from '../service-page/TransportationModes';
import CTASection from '../service-page/CTASection';

const Services = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <ServicesHero />

      {/* Transportation Modes Section */}
      <TransportationModes />

      {/* CTA Section */}
      <CTASection />

      {/* Our Services Section */}
      <OurServices />

      {/* Additional spacing before footer */}
      <div className="h-12 sm:h-16 md:h-20"></div>
    </>
  );
};

export default Services;
