import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo on the far LEFT */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1y0sfg4Lw2ycxe_yxJgrxipJOMRaxLxB8&sz=w1000" 
                alt="RecoverX Logo" 
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Nav links CENTERED in the middle (Desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:text-brand-blue relative py-1 ${
                  location.pathname === item.path ? 'text-brand-blue' : 'text-slate-600'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Get Started Button on the far RIGHT (Desktop) */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <Link
              to="/contact"
              className="bg-brand-blue hover:bg-sky-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-brand-blue/30 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue focus:outline-none p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-brand-blue bg-blue-50'
                    : 'text-slate-600 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-3 rounded-md text-base font-bold text-brand-blue"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;