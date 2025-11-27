import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const WhoWeAre = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Content Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Top Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-orange-500 inline-block"></span>
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1C39] leading-[1.1] mb-6"
            >
              Your Trusted Partner <br />
              in Global Logistics
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              We are a full-service logistics firm dedicated to streamlining your
              supply chain. We combine advanced technology with deep
              industry expertise to move your goods efficiently and reliably.
            </motion.p>

            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="flex-shrink-0 w-8 h-8 bg-[#0B1C39] rounded-full flex items-center justify-center shadow-md">
                <Check className="w-5 h-5 text-white stroke-[3]" />
              </div>
              <p className="text-[#0B1C39] font-bold text-lg">
                Trusted by brands across 15+ countries.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                Explore More
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* --- Right Image Section --- */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Soft Glow Background Effect (Orange Blur) */}
            <div className="absolute -bottom-10 -left-10 w-4/5 h-4/5 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-4/5 h-4/5 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics worker with shipping containers and plane" 
                className="w-full h-full object-cover min-h-[400px] md:min-h-[500px] hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Optional Overlay gradient to match photo vibe if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;