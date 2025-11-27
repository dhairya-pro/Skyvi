import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Truck, 
  ShieldCheck, 
  Tag, 
  Package, 
  CandlestickChart, 
  ArrowRight 
} from 'lucide-react';

// Data array for the services blocks
const servicesData = [
  {
    id: 1,
    icon: Globe2,
    title: "Product Sourcing",
    description: "Finding your right suppliers and materials for your needs.",
  },
  {
    id: 2,
    icon: Truck,
    // The image icon is a bit ambiguous, Truck is a good approximation for logistics
    title: "Logistics & Freight",
    description: "Efficiently moving your access across global markets.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Ensuring your products meet the highest standards.",
  },
  {
    id: 4,
    icon: Tag,
    title: "Private Labeling",
    description: "Build your own brand with ease.",
  },
  {
    id: 5,
    icon: Package,
    title: "Packaging",
    description: "Export ready packaging and ready designs.",
  },
  {
    id: 6,
    icon: CandlestickChart,
    // Using Chart icon for Market Insights
    title: "Market Insights",
    description: "Data-Driven sourcing strategies for growth.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card revealing
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};


const CoreServices = () => {
  // Define theme colors consistent with previous components
  const themeColors = {
    navy: "#0B1C39",
    orange: "text-orange-500",
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: themeColors.navy }}
          >
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of services designed to 
            streamline your supply chain from centered
          </p>
        </motion.div>

        {/* --- Services Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              // Card Styling: Very light gray bg, soft shadow, large rounded corners
              className="bg-gray-50 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`mb-6 ${themeColors.orange}`}>
                <service.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: themeColors.navy }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link */}
              <a 
                href="#" 
                className={`inline-flex items-center gap-2 font-semibold ${themeColors.orange} hover:opacity-80 transition-opacity`}
              >
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default CoreServices;