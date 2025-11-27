import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Calendar, Package, Globe } from 'lucide-react';

// --- Helper Component for the Number Counting Animation ---
const Counter = ({ value, direction = "up" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [isInView, motionValue, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

const StatsBar = () => {
  // Data array for easy editing
  const stats = [
    {
      id: 1,
      icon: <Calendar className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
      number: 10,
      suffix: "+",
      label: "Years Experience", // Corrected typo from image 'Experiance'
    },
    {
      id: 2,
      icon: <Package className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
      number: 1000,
      suffix: "+",
      label: "Shipments Completed",
    },
    {
      id: 3,
      icon: <Globe className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
      number: 25,
      suffix: "+",
      label: "Global Partners",
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* The Container 
           - Uses a linear gradient to match the image (Dark Navy -> Soft Periwinkle)
           - Rounded corners and shadow
        */}
        <div className="relative bg-gradient-to-r from-[#091E3A] via-[#2F59A3] to-[#99B2FF] rounded-3xl shadow-2xl shadow-blue-900/20 p-8 md:p-12 overflow-hidden">
          
          {/* Optional: Subtle decorative circle in background to add depth like the glow in the previous component */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center text-center ${
                  index !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''
                }`}
              >
                {/* Icon Container */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  className="mb-4 p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
                >
                  {stat.icon}
                </motion.div>

                {/* Number Counter */}
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                  <Counter value={stat.number} />
                  <span>{stat.suffix}</span>
                </h3>

                {/* Label */}
                <p className="text-blue-100 text-lg font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsBar;