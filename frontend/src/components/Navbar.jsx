import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Blog', href: '/blog' },
    { name: 'How We Work', href: '/how-we-work' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-soft px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <span className="text-2xl font-bold text-navy">SKYVI</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-navy hover:text-orange transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center">
              <Link 
                to="/contact"
                className="bg-navy text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-navy-dark transition-colors duration-200"
              >
                <Phone size={18} />
                <span className="font-medium">Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-navy hover:text-orange transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact"
                  className="bg-navy text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-navy-dark transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={18} />
                  <span className="font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
