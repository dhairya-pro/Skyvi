import React, { useState } from 'react';
import { 
  Factory, 
  Package, 
  Users, 
  ShieldCheck, 
  Truck, 
  Lock, 
  Headphones 
} from 'lucide-react';

export const WhyChooseUs = () => {
  // 1. Setup State to track which item is active
  const [activeIndex, setActiveIndex] = useState(0);

  // 2. Define your data points
  const features = [
    { 
      id: 0, 
      title: "Direct Factory Access", 
      desc: "We source products directly from verified Chinese factories—giving you the best price and best quality.",
      icon: <Factory size={28} /> 
    },
    { 
      id: 1, 
      title: "All Categories Available", 
      desc: "Electronics, Home & Kitchen, Toys, Tools, Beauty, Lifestyle—we have trusted factories in every category.",
      icon: <Package size={28} /> 
    },
    { 
      id: 2, 
      title: "Strong Global Partner Network", 
      desc: "Connected with 1000+ suppliers across China to ensure fast, reliable, and accurate sourcing.",
      icon: <Users size={28} /> 
    },
    { 
      id: 3, 
      title: "Triple Quality Check", 
      desc: "Every order is inspected, checked, and verified with photos/videos before shipping.",
      icon: <ShieldCheck size={28} /> 
    },
    { 
      id: 4, 
      title: "Fast & Safe Delivery", 
      desc: "Air, Sea & Express shipping with proper packaging and on-time delivery to India.",
      icon: <Truck size={28} /> 
    },
    { 
      id: 5, 
      title: "Full Product Privacy", 
      desc: "Your ideas, product details & supplier information stay 100% confidential.",
      icon: <Lock size={28} /> 
    },
    { 
      id: 6, 
      title: "End-to-End Import Support", 
      desc: "We handle sourcing, negotiation, QC, shipping & documentation—so the import process is smooth and stress-free.",
      icon: <Headphones size={28} /> 
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1C39] mb-3">
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-lg">
            Your trusted partner for seamless global trade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Interactive Orbit Diagram */}
          {/* 'group' class allows us to control hover effects if needed, but we use JS for active state */}
          <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px] mx-auto flex justify-center items-center">
            
            {/* Orbit Path (Dashed Circle) */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border-2 border-dashed border-slate-200 rounded-full z-0"></div>
            
            {/* Center Text (Changes based on activeIndex) */}
            <div key={activeIndex} className="relative z-10 text-center max-w-[200px] animate-fade-in">
              <h3 className="text-xl font-extrabold text-[#0B1C39] mb-2 leading-tight transition-all duration-300">
                {features[activeIndex].title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed transition-all duration-300">
                {features[activeIndex].desc}
              </p>
            </div>

            {/* Render the Nodes in a Circle */}
            {features.map((item, index) => {
              // Calculate Position on Circle
              const totalItems = features.length;
              const angle = (index * (360 / totalItems)) - 90; 
              // Radius: separate for mobile/desktop to keep it responsive
              // We can't easily use media queries in JS, so we'll use a fixed responsive logic or a CSS variable approach.
              // Here I use a base radius and clamp it using Tailwind's sizing logic visually, 
              // but strictly for math, let's assume a standard desktop radius and scale the wrapper.
              // A simpler way is to rely on the wrapper size.
              const radius = 175; // 175px radius
              
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              const isActive = activeIndex === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex justify-center items-center shadow-lg cursor-pointer z-20 transition-all duration-500 ease-out
                    ${isActive 
                      ? 'bg-orange-500 text-white scale-110 md:scale-125 shadow-[0_0_25px_rgba(249,115,22,0.4)] ring-4 ring-white' 
                      : 'bg-white text-[#0B1C39] hover:scale-110 hover:shadow-xl'
                    }
                  `}
                  // We use inline styles for the exact coordinates because Tailwind can't generate dynamic arbitrary values comfortably in a loop
                  style={{ 
                    transform: `translate(${x}px, ${y}px)`,
                    // On mobile (small screens), we might want to shrink the spread. 
                    // However, since we are translating pixels, the easiest way to make this responsive 
                    // without complex JS resize listeners is to scale the entire parent container using CSS transform scale.
                  }} 
                  aria-label={item.title}
                >
                  <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Static Text Content */}
          <div className="text-center lg:text-left px-4">
            <p className="text-slate-600 leading-8 text-lg mb-10">
              Choosing <strong className="text-[#0B1C39]">SKYVI</strong>Your product idea, our sourcing power — let’s make it real. Upload Your Product & Get Instant Quotation!
            </p>

            {/* Logos Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              
              {/* IEC Logo Mockup */}
              <div className="h-[60px] flex items-center justify-center">
                <div className="bg-[#005eb8] text-white font-bold text-2xl px-4 py-1">
                  IEC
                </div>
              </div>
              
              {/* GST Logo Mockup */}
              <div className="h-[60px] flex items-center justify-center">
                 <div className="w-[65px] h-[65px] border-[3px] border-dashed border-red-600 text-red-600 rounded-full flex flex-col items-center justify-center font-black leading-none rotate-[-10deg]">
                   <span className="text-[8px] uppercase tracking-wide font-bold">Govt</span>
                   <span className="text-xl">GST</span>
                   <span className="text-[8px] uppercase tracking-wide font-bold">Tax</span>
                 </div>
              </div>

              {/* ISO Logo Mockup */}
              <div className="h-[60px] flex items-center justify-center">
                <div className="w-[65px] h-[65px] border-2 border-[#333] text-[#333] rounded-full flex flex-col items-center justify-center font-black relative">
                  <span className="absolute top-1 text-[8px] font-bold tracking-widest">CERTIFIED</span>
                  <span className="text-xl border-y-2 border-[#333] px-1">ISO</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Custom Animation Keyframes for the Fade In effect */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        /* Responsive scaling for the orbit on mobile screens */
        @media (max-width: 640px) {
          .orbit-wrapper {
             transform: scale(0.75);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;