import React, { useEffect, useRef, useState } from 'react';
import { HelpCircle, FileText, ShoppingCart, CheckCircle, Package, Truck, Gift } from 'lucide-react';

const HowWeWork = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepsRef = useRef([]);

  const workflowSteps = [
    {
      number: '01',
      title: 'Inquiry & Product Details',
      description: 'Share your needs & ideas',
      icon: HelpCircle,
      side: 'right'
    },
    {
      number: '02',
      title: 'Market Research & Quotation',
      description: 'Find suppliers & pricing',
      icon: FileText,
      side: 'left'
    },
    {
      number: '03',
      title: 'Order Confirmation',
      description: 'Finalize Contract',
      icon: ShoppingCart,
      side: 'right'
    },
    {
      number: '04',
      title: 'Sample & Verification',
      description: 'Approve quality',
      icon: CheckCircle,
      side: 'left'
    },
    {
      number: '05',
      title: 'Production & Quality Check',
      description: 'Monitor Manufacturing',
      icon: Package,
      side: 'right'
    },
    {
      number: '06',
      title: 'Shipping & Customs',
      description: 'Handle logistics',
      icon: Truck,
      side: 'left'
    },
    {
      number: '07',
      title: 'Delivery & Support',
      description: 'Receive goods & assistance',
      icon: Gift,
      side: 'right'
    }
  ];

  useEffect(() => {
    const observers = stepsRef.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section with proper spacing */}
      <div 
        className="pt-24 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 via-[#3b5998]/85 to-[#5b6d9e]/80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-4xl mx-auto py-20 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            How We Work
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
            Our streamlined process
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg animate-pulse-button">
            Enquire Now →
          </button>
        </div>
      </div>

      {/* Workflow Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Vertical Timeline Line - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-400 hidden lg:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-20">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isLeft = step.side === 'left';
              
              return (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={`relative transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : `opacity-0 ${isLeft ? 'translate-x-10' : '-translate-x-10'} translate-y-10`
                  }`}
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side */}
                    {isLeft ? (
                      <>
                        <div className="text-right pr-12">
                          <div className="inline-block">
                            <span className="text-sm font-bold text-[#4a5f8f] mb-2 block">{step.number}</span>
                            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                        <div className="relative">
                          {/* Orange Dot on Line */}
                          <div className="absolute -left-[18px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-ping-slow"></div>
                          <div className="absolute -left-[18px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                          
                          {/* Icon Box */}
                          <div className="ml-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-orange-200">
                              <Icon className="text-orange-500" size={40} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          {/* Orange Dot on Line */}
                          <div className="absolute -right-[18px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-ping-slow"></div>
                          <div className="absolute -right-[18px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                          
                          {/* Icon Box */}
                          <div className="mr-8 ml-auto w-24">
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-orange-200">
                              <Icon className="text-orange-500" size={40} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                        <div className="text-left pl-12">
                          <span className="text-sm font-bold text-[#4a5f8f] mb-2 block">{step.number}</span>
                          <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center shadow-md flex-shrink-0 border border-orange-200">
                      <Icon className="text-orange-500" size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#4a5f8f] mb-1 block">{step.number}</span>
                      <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Your Advantage Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1e3a8a] mb-16">
            Your Advantage, Simplified
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* CTA Card - Takes full height on left */}
            <div className="lg:row-span-2 bg-gradient-to-br from-[#1a3a6e] via-[#2d4f8f] to-[#4d6ab8] rounded-3xl p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Ready to<br />simplify your<br />sourcing project ?
              </h3>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 w-fit">
                Explore More →
              </button>
            </div>

            {/* Advantage Cards - 2x2 Grid on right */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                Verified Suppliers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work only with pre-screened, reliable manufacturers and suppliers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our expert team provides consistent support from inquiry to delivery.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                Transparent Communication
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay informed at every step with real-time updates and clear processes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                Guaranteed Quality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every product passes strict quality checks for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }

        .animate-pulse-button {
          animation: pulse-button 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default HowWeWork;
