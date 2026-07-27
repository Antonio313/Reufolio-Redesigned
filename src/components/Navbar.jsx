import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data';
import { scrollToSection } from '../utils/scrollTo';
import ThemeToggle from './ThemeToggle';

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
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { name: 'home', id: 'home' },
    { name: 'about', id: 'about' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border'
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
            <img src="/logo.svg" alt="Reufolio Logo" className="w-9 h-9" />
            <span className="text-lg font-mono font-semibold text-text-primary">
              reufolio<span className="text-accent-cyan">.</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Available for Hire badge */}
            <span className="flex items-center gap-1.5 px-3 py-1.5 border border-accent-green/30 text-accent-green text-xs font-mono rounded-md">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              available_for_hire
            </span>

            <motion.a
              href={personalInfo.resumePath}
              download="Reuel_Richards_Resume.pdf"
              className="px-4 py-2 rounded-md border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan font-mono text-sm transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              $ resume
            </motion.a>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-accent-cyan transition-colors"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-canvas/95 backdrop-blur-sm border-t border-border">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2 font-mono text-sm text-text-secondary hover:text-accent-cyan hover:bg-surface rounded-md transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
          {/* Available for Hire badge — mobile */}
          <div className="px-3 py-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-accent-green/30 text-accent-green text-xs font-mono rounded-md">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              available_for_hire
            </span>
          </div>
          <a
            href={personalInfo.resumePath}
            download="Reuel_Richards_Resume.pdf"
            className="block w-full text-center px-3 py-2 rounded-md border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan font-mono text-sm transition-colors duration-300"
          >
            $ download resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
