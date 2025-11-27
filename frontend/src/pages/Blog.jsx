import React, { useState } from 'react';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
    {
      title: 'Top Export Products for 2025',
      description: 'An insights of high growth exports from the "Dragon" effect to the boom in sustainable goods and engineering.',
      date: 'Nov 15, 2025',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      tag: 'Market Trends'
    }
  ];

  const blogPosts = [
    {
      title: 'Top Export Products for 2025',
      description: 'An insights of high growth exports from the "Dragon" effect to the boom in sustainable goods and engineering.',
      date: 'Nov 15, 2025',
      tag: 'Market Trends'
    },
    {
      title: 'Global Trade Regulations Update',
      description: 'Latest changes in international trade policies and their impact on export businesses.',
      date: 'Nov 10, 2025',
      tag: 'Market Trends'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-lg md:text-xl text-white/90">
            Explore all our guides on product development, packaging, and building a brand that lasts.
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#1e3a8a] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Post
                </span>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="Cargo Ship"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Blog Posts List */}
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 hover:text-[#2563eb] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-[#1e3a8a] font-semibold hover:text-[#2563eb] transition-colors flex items-center gap-2">
                      Read Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button 
              onClick={() => setCurrentSlide(0)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 0 ? 'w-8 bg-[#1e3a8a]' : 'w-2 bg-gray-300'
              }`}
              aria-label="Slide 1"
            />
            <button 
              onClick={() => setCurrentSlide(1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 1 ? 'w-8 bg-[#1e3a8a]' : 'w-2 bg-gray-300'
              }`}
              aria-label="Slide 2"
            />
            <button 
              onClick={() => setCurrentSlide(2)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === 2 ? 'w-8 bg-[#1e3a8a]' : 'w-2 bg-gray-300'
              }`}
              aria-label="Slide 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
