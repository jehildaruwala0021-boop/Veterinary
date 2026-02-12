
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Hospital Info', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner - Emergency Only */}
      <div className="bg-rose-500 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <HeartPulse size={16} />
          <span>Emergency? Call us immediately: <strong>{HOSPITAL_INFO.phone}</strong></span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage-200">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sage-600 rounded-xl flex items-center justify-center text-white font-bold">PH</div>
            <span className="text-xl font-bold tracking-tight text-sage-700">Pawfect Health</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-sage-600' : 'text-slate-600 hover:text-sage-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="bg-sage-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-700 transition-all shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-sage-200 px-4 py-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="block text-lg font-medium text-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="block w-full bg-sage-600 text-white text-center py-4 rounded-2xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sage-600 rounded-lg flex items-center justify-center text-white font-bold">PH</div>
              <span className="text-xl font-bold tracking-tight text-white">Pawfect Health</span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed">
              We provide trust-driven, comprehensive veterinary care for your beloved pets in the heart of Whitefield, Bangalore. Our mission is to combine medical excellence with a warm, caring touch.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sage-600 transition-colors">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sage-600 transition-colors">
                <span className="sr-only">Instagram</span>
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/emergency" className="hover:text-white transition-colors">Emergency Care</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Meet the Team</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-sage-600" />
                <span className="text-sm">{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="shrink-0 text-sage-600" />
                <span className="text-sm">{HOSPITAL_INFO.phone}</span>
              </div>
              <p className="text-xs text-slate-500 mt-6">
                © {new Date().getFullYear()} Pawfect Health. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
