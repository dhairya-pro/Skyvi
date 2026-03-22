import React from 'react';
import whoweare from '../assets/whoweare.jpeg'
const AboutWhoWeAre = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Card */}
                <div className="bg-[#F8F9FA] rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
                    
                    {/* Left Side: Image */}
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full">
                        <img 
                            src={whoweare} 
                            alt="Global Sourcing Partners" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        
                        {/* Badge */}
                        <div 
                            className="inline-block bg-[#EAF0F6] text-[#6B7A99] font-bold text-xs tracking-widest uppercase px-4 py-2 rounded mb-6 w-fit" 
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Who We Are
                        </div>

                        {/* Heading */}
                        <h2 
                            className="text-3xl lg:text-4xl font-bold text-[#051A5E] mb-6 leading-tight" 
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Your Trusted Partner in Global Sourcing
                        </h2>

                        {/* Paragraphs */}
                        <div 
                            className="text-[#4A5568] space-y-5 mb-10 text-[15px] sm:text-base leading-relaxed" 
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <p>
                                <strong className="text-gray-900 font-bold">Skyvi International</strong> is a trusted India-based import company specializing in sourcing high-quality products directly from <strong className="text-gray-900 font-bold">China.</strong>
                            </p>
                            <p>
                                We help <strong className="text-gray-900 font-bold">wholesalers, retailers,</strong> eCommerce sellers, and startups grow by offering factory-direct pricing, premium quality, and seamless importing solutions.
                            </p>
                            <p>
                                With strong connections across top Chinese manufacturers and years of expertise, we handle everything—from product research and negotiation to quality checks, packaging, and delivery in India.
                            </p>
                        </div>

                        {/* Checkmark List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                            {[
                                "Factory Direct Pricing",
                                "Trusted Chinese Suppliers",
                                "End-to-End Import Solution",
                                "Quality Assurance & Logistics Support"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E5F5ED] flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span 
                                        className="text-[#4A5568] text-[15px] font-medium" 
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Area */}
                        <div 
                            className="flex flex-wrap items-center justify-between gap-y-4 text-center sm:text-left pt-2" 
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <div className="flex items-center">
                                <span className="text-xl sm:text-2xl font-extrabold text-[#1A202C]">15+</span>
                                <span className="text-[#718096] ml-2 text-sm font-medium">Countries</span>
                            </div>
                            
                            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
                            
                            <div className="flex items-center">
                                <span className="text-xl sm:text-2xl font-extrabold text-[#1A202C]">100+</span>
                                <span className="text-[#718096] ml-2 text-sm font-medium">Clients</span>
                            </div>
                            
                            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
                            
                            <div className="flex items-center">
                                <span className="text-xl sm:text-2xl font-extrabold text-[#1A202C]">500+</span>
                                <span className="text-[#718096] ml-2 text-sm font-medium">Products Sourced</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWhoWeAre;
