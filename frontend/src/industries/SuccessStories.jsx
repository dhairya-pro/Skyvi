import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      text: "Skyvi made sourcing from China effortless. Their communication and quality checks saved us time and cost.",
      author: "Rahul Mehta",
      role: "Importer (India)",
      isFeatured: false,
    },
    {
      id: 2,
      text: "Skyvi made sourcing from China effortless. Their communication and quality checks saved us time and cost.",
      author: "Rahul Mehta",
      role: "Importer (India)",
      isFeatured: true, // This triggers the blue gradient style
    },
    {
      id: 3,
      text: "Skyvi made sourcing from China effortless. Their communication and quality checks saved us time and cost.",
      author: "Rahul Mehta",
      role: "Importer (India)",
      isFeatured: false,
    },
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a]"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Building lasting partnerships through trust, transparency, and quality service.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              // Conditional Styling based on 'isFeatured'
              className={`
                relative rounded-[2rem] p-8 h-full flex flex-col justify-between shadow-xl transition-transform duration-300 hover:-translate-y-2
                ${item.isFeatured 
                  ? 'bg-gradient-to-b from-[#93c5fd] to-[#172554] text-white' // Center Blue Card
                  : 'bg-white text-[#334155] border border-gray-100' // Side White Cards
                }
              `}
            >
              {/* Large Decorative Quote Icon */}
              <div className="mb-6">
                <Quote 
                  size={64} 
                  className={`
                    fill-current 
                    ${item.isFeatured ? 'text-white/30' : 'text-gray-100'}
                  `} 
                />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <p className={`text-lg font-medium leading-relaxed ${item.isFeatured ? 'text-white' : 'text-[#475569]'}`}>
                  {item.text}
                </p>

                <div className="space-y-3">
                  <div className="text-sm font-semibold opacity-90">
                    | {item.author}, {item.role}
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill="#f97316" 
                        stroke="none"
                        className="text-orange-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;