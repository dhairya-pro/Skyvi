import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ExpertiseSection = () => {
  // Data based on the text visible in your image
  const categories = [
    {
      id: 1,
      title: "Home & Kitchen",
      description: "From essential appliances to stylish decor, we source premium products for every home.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Apparel & Textiles",
      description: "Empowering fashion brands with sustainable and high-quality fabric and garment sourcing.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Consumer Electronics",
      description: "Connecting you with manufacturers of innovative and cutting-edge electronic devices.",
      image: "https://images.unsplash.com/photo-1550009158-9ebf690569ba?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Health & Wellness",
      description: "Sourcing trusted ingredients and products for the growing health and beauty markets.",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Sports & Recreation",
      description: "Providing durable and performance-oriented solutions for outdoor and sporting goods.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Children's Products",
      description: "Ensuring safety and quality in the sourcing of toys, games, and baby essentials.",
      image: "https://images.unsplash.com/photo-1566576912902-6b6ca93e101c?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="w-full bg-white">
      {/* Background Gradient Section 
        Matches the blue-to-white fade in the image.
        Adjust the 'from' color code if you need it darker/lighter.
      */}
      <div className="relative w-full pb-20 bg-gradient-to-b from-[#7384b8] via-[#dce3f5] to-white pt-44 px-6 md:px-12 text-center">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
            Our Expertise
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm">
            We specialize in connecting businesses with reliable sourcing partners across a diverse range of industries. Discover how we can support product development and supply chain needs.
          </p>
          
          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-lg transition-colors duration-300 mt-4"
          >
            Explore More
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              {/* The image shows a dark fade at the bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4f5a82]/90 via-transparent to-transparent opacity-90" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="bg-[#4f5a82]/30 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                    {category.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;