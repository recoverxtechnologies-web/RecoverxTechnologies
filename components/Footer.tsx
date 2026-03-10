import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
               {/* Logo displayed transparently without background container */}
               <img 
                 src="https://drive.google.com/thumbnail?id=1y0sfg4Lw2ycxe_yxJgrxipJOMRaxLxB8&sz=w1000" 
                 alt="RecoverX Logo" 
                 className="h-16 w-auto object-contain"
               />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              Powering the future of EV recovery, logistics, and sustainable operations. Fast. Scalable. Eco-friendly.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/recoverx-technologies/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-brand-blue text-sm transition">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-blue text-sm transition">Services</Link></li>
              <li><Link to="/greencycle" className="text-slate-400 hover:text-brand-blue text-sm transition">GreenCycle</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-blue text-sm transition">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-blue text-sm transition">EV Recovery</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-blue text-sm transition">Logistics Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-blue text-sm transition">Rental Fleet Recovery</Link></li>
              <li><Link to="/greencycle" className="text-slate-400 hover:text-brand-blue text-sm transition">Scrap Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <span>No. 32, Work Place,<br />RecoverX Technologies LLP,<br />JP Nagar, Bengaluru – 560078,<br />Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone size={18} className="text-brand-blue flex-shrink-0" />
                <span>+91 79756 60772</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail size={18} className="text-brand-blue flex-shrink-0" />
                <span>info@gorecoverx.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RecoverX Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;