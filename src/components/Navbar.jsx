import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
          >
            <img src="/logo.svg" alt="Reufolio Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Reufolio
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Available for Hire badge */}
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for Hire
            </span>

            <motion.a
              href={personalInfo.resumePath}
              download="Reuel_Richards_Resume.pdf"
              className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
          {/* Available for Hire badge — mobile */}
          <div className="px-3 py-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for Hire
            </span>
          </div>
          <a
            href={personalInfo.resumePath}
            download="Reuel_Richards_Resume.pdf"
            className="block w-full text-center px-3 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
