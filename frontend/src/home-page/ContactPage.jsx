import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

/**
 * COMPONENT 1: CALL TO ACTION (CTA) BANNER
 * Matches the top blue gradient section with the ripple effect.
 */
const CallToAction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full relative overflow-hidden rounded-[2.5rem] shadow-xl"
    >
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05103A] via-[#2a4685] to-[#9fb5f7]"></div>

      {/* Decorative Ripple Circles (Right Side) */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full border-[40px] border-white/20 scale-50"></div>
        <div className="absolute inset-0 rounded-full border-[40px] border-white/10 scale-75"></div>
        <div className="absolute inset-0 rounded-full border-[40px] border-white/5 scale-100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          Have a Product in Mind ?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-8 font-light">
          Let’s Make it happen!
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F97316] hover:bg-[#ea6610] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-orange-600/30 transition-colors"
        >
          Explore More
          <div className="bg-white/20 rounded-full p-1">
             <ArrowRight size={16} />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};


/**
 * COMPONENT 2: CONTACT US FORM
 * Matches the bottom gray section with the form and info card.
 */
const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="w-full bg-[#F4F6F8] rounded-[2.5rem] p-8 md:p-12 lg:p-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B1C39]">Contact Us</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* --- Left: Form Fields --- */}
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#0B1C39] font-medium ml-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0B1C39]/20 transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#0B1C39] font-medium ml-1">Company</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0B1C39]/20 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#0B1C39] font-medium ml-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0B1C39]/20 transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#0B1C39] font-medium ml-1">Phone</label>
              <input 
                type="tel" 
                className="w-full bg-white rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0B1C39]/20 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#0B1C39] font-medium ml-1">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-white rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0B1C39]/20 transition-all shadow-sm resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button className="bg-[#F97316] hover:bg-[#ea6610] text-white font-semibold py-3 px-10 rounded-full shadow-md transition-colors w-full md:w-auto">
              Send
            </button>
          </div>
        </div>

        {/* --- Right: Info Card --- */}
        <div className="lg:w-[380px] flex-shrink-0">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg h-full flex flex-col justify-between">
            
            <div>
              <h3 className="text-[#0B1C39] font-bold text-lg mb-8 leading-snug">
                We're here to answer your questions and discuss your needs.
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium pt-2">
                    123, Anywhere in City<br />
                    , Ahemedabad
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    +91 78965 41236
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium break-all">
                    skyviinternational@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-[#0B1C39] text-xs font-bold mb-3">Follow us on Social Media</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-white hover:bg-[#d85e0d] transition-colors shadow-sm"
                  >
                    <Icon size={14} fill="currentColor" className="stroke-none" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

/**
 * MAIN EXPORT
 * Displays both components stacked with spacing
 */
const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 max-w-7xl mx-auto space-y-16">
      <CallToAction />
      <ContactForm />
    </div>
  );
};

export default ContactPage;