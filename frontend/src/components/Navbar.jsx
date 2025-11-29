import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/skyvilogo.png';

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

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-gradient-to-b from-white/95 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Balanced Size */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="Skyvi Logo" 
                className="h-16 md:h-18 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-navy hover:text-orange transition-colors duration-200 font-medium text-base relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link 
                to="/contact"
                className="bg-navy text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Phone size={18} />
                <span className="font-medium">Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-navy p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu - Animated */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="lg:hidden overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        variants={itemVariants}
                      >
                        <Link
                          to={link.href}
                          className="text-navy hover:text-orange transition-colors duration-200 font-medium text-base block py-2 px-4 rounded-lg hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div variants={itemVariants}>
                      <Link 
                        to="/contact"
                        className="bg-navy text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all duration-200 mt-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Phone size={18} />
                        <span className="font-medium">Contact Us</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
