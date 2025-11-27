import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Linkedin } from 'lucide-react';
import GoogleMapsLink from '../components/GoogleMapsLink';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(71, 85, 105, 0.7), rgba(71, 85, 105, 0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')`,
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">Contact</h1>
          <p className="text-lg md:text-xl text-white/90 animate-slide-up">
            Skyviinternational is ready to provide the right solution according to your needs.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get in Touch Section */}
            <div className="space-y-8 animate-slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                  Get in touch
                </h2>
                <p className="text-gray-600 text-lg">
                  "Let's start a conversation about how we can work together."
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">123, Anywhere in city,</p>
                    <p className="text-gray-700 font-medium">Ahmedabad, Gujarat.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">+91 78965 41236</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">skyviinternational@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4 font-medium">Follow us on Social Media</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Facebook className="text-white" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Twitter className="text-white" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:bg-white transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <span>Send Message</span>
                  <Send 
                    size={20} 
                    className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.4s both;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out 0.5s both;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out 0.6s both;
        }
      `}</style>
      <GoogleMapsLink />    
    </div>
  );
};

export default Contact;
