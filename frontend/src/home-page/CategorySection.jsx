import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    title: 'Home & Kitchen ware', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Health & Personal Care', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Baby Products', 
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    title: 'Beauty Products', 
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    title: 'Home & Office Furniture', 
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 6, 
    title: 'Mobile accessories', 
    image: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d06e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 7, 
    title: 'Sports, Fitness & Outdoors', 
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 8, 
    title: 'Toys & Games', 
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800' 
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Badge */}
          <div className="bg-[#051A5E] text-white px-6 py-2 font-bold text-sm tracking-wider uppercase transform -skew-x-12 mb-6 shadow-md">
            <span className="block transform skew-x-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Categories
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#051A5E] max-w-4xl mx-auto leading-tight" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Categories we have expertise in import & export globally.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative flex flex-col bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-[260px] transform hover:-translate-y-2"
              style={{ borderRadius: '32px' }}
            >
              {/* Image Container */}
              <div className="flex-1 overflow-hidden bg-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              
              {/* Bottom Strip */}
              <div className="bg-[#F5722D] text-white p-4 flex justify-between items-center group-hover:bg-[#051A5E] transition-colors duration-300 min-h-[64px]">
                <h3 
                  className="font-semibold text-sm sm:text-base pr-4 line-clamp-1" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {cat.title}
                </h3>
                <ArrowRight 
                  size={20} 
                  className="text-white transform group-hover:translate-x-2 transition-transform duration-300 shrink-0" 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
