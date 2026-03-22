import React from 'react';
import ServicesHero from '../service-page/ServicesHero';
import OurServices from '../service-page/OurServices';    
import TransportationModes from '../service-page/TransportationModes';
import CTASection from '../service-page/CTASection';
import SuccessStories from '../service-page/SuccessStories';

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

      {/* Success Stories Section */}
      <SuccessStories />

  
    </>
  );
};

export default Services;
