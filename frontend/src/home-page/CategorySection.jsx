import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    title: 'Electronics & Gadgets', 
    subtitle: 'Smart devices & accessories',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Home & Kitchen', 
    subtitle: 'Daily essentials & tools',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Fashion & Apparel', 
    subtitle: 'Clothing & lifestyle wear',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    title: 'Toys & Kids Products', 
    subtitle: 'Fun & safe products',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    title: 'Health & Personal Care', 
    subtitle: 'Wellness & grooming products',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 6, 
    title: 'Industrial & Bulk Goods', 
    subtitle: 'Wholesale & B2B supply',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 7, 
    title: 'Fitness & Lifestyle', 
    subtitle: 'Sports & outdoor products',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 8, 
    title: 'Custom Sourcing', 
    subtitle: 'We source anything on demand',
    image: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&q=80&w=800' 
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051A5E] mb-4" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Product Categories We Source & Deliver Globally
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-500 max-w-3xl leading-relaxed font-medium"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            We help businesses import high-quality products across multiple categories 
            with reliable sourcing and global logistics support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative flex flex-col overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-[240px] sm:h-[260px] md:h-[280px]"
              style={{ borderRadius: '20px' }}
            >
              {/* Image Container */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col">
                <h3 
                  className="text-white font-bold text-lg sm:text-xl mb-1" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {cat.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p 
                    className="text-gray-300 text-xs sm:text-sm font-medium pr-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {cat.subtitle}
                  </p>
                  <ArrowRight 
                    size={18} 
                    className="text-white opacity-90 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 shrink-0" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
