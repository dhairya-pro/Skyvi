import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-navy rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">SKYVI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Global Partner for Smarter Sourcing & Seamless Trade. Simplifying your global supply chain.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-orange transition-colors text-sm">
                  Industries
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-orange transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Ocean Transportation</li>
              <li className="text-gray-300 text-sm">Airways Transportation</li>
              <li className="text-gray-300 text-sm">Road Transportation</li>
              <li className="text-gray-300 text-sm">Train Transportation</li>
              <li className="text-gray-300 text-sm">Supply Chain Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Avenue, Trade City, TC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@skyvi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SKYVI International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
