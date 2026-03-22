import React from 'react';
import { TrendingUp, Store, Star, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="text-[#3CB371]" size={24} />,
      title: "From Small Order to Big Business",
      body: "One client began with a 10-kg trial order from China. Now they import full cargo shipments monthly, supplying pan-India.",
      highlights: [
        <span key="1">Started with <span className="text-[#3CB371] font-medium">10 kg</span> &nbsp; <ArrowRight size={14} className="inline mx-1"/> &nbsp; Now full cargo</span>
      ],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      name: "Ravi K.",
      rating: 4,
      quote: "“Skyvi boosted my small trial order to full cargo shipments. Amazing quality and pricing!”"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      icon: <span className="text-[#20B2AA] font-bold text-2xl font-serif">a</span>,
      title: "Amazon Seller Boosted Profits",
      body: "We connected an Amazon seller with factories for 3 hot-selling items, reducing their costs by 35%. Now they have 5x more monthly sales.",
      highlights: [
        <span key="1" className="text-[#3CB371] font-medium">Cost reduced by 35%</span>,
        <span key="2" className="text-gray-800 font-medium">5x monthly sales</span>
      ],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      name: "Priya S.",
      rating: 5,
      quote: "“Skyvi reduced my costs by 35% and multiplied my sales on Amazon. Incredible results!”"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
      icon: <Store className="text-[#00CED1]" size={24} />,
      title: "Retail Shop Turned into Wholesale Supplier",
      body: "A retail shop owner sourced mixed products through us. Now, they supply 20+ retailers in their city.",
      highlights: [
        <span key="1">Now supplies <span className="text-gray-800 font-medium">20+ retailers</span></span>
      ],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      name: "Anil G.",
      rating: 5,
      quote: "“Skyvi helped me transform my local shop into a wholesale supplier now providing to dozens of stores.”"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div 
            className="inline-block bg-[#F0F2F5] text-[#4A5568] font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded mb-6" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            OUR EXPERTISE
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#051A5E] mb-6" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Real Success Stories from Our Clients
          </h2>
          
          <p 
            className="text-base sm:text-lg text-[#4A5568] max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Discover how we've helped businesses scale from small orders to wholesale
            success with our expert sourcing solutions.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-[#FAFBFC] rounded-2xl flex flex-col h-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-visible"
            >
              {/* Top Image + Floating Icon */}
              <div className="relative h-60 w-full rounded-t-2xl overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                {/* Floating Icon Badge Container placed absolutely on the bottom left corner of the image area so it overlaps */}
                <div className="absolute -bottom-6 left-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center z-10">
                  {story.icon}
                </div>
              </div>

              {/* Card Body content with pt-10 to account for overlapping badge */}
              <div className="flex flex-col flex-1 p-8 pt-10 bg-white rounded-b-2xl">
                <h3 
                  className="text-[22px] font-bold text-[#1A202C] mb-3 leading-tight" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {story.title}
                </h3>
                
                <p 
                  className="text-gray-500 text-[15px] leading-relaxed mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {story.body}
                </p>

                {/* Highlights Strip */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {story.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#F0F4F8] text-gray-600 text-[13px] px-3 py-2 rounded-md flex items-center justify-center font-medium"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Bottom Author & Quote section */}
                <div className="mt-auto border-t border-gray-100 pt-6 flex gap-4">
                  {/* Avatar */}
                  <img 
                    src={story.avatar} 
                    alt={story.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-[#1A202C] text-[15px]">{story.name}</span>
                      <div className="flex text-[#F5C518]">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            fill={i < story.rating ? "currentColor" : "transparent"} 
                            className={i < story.rating ? "" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed italic pr-2">
                      {story.quote}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
