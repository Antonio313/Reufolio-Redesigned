import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Static background — no JS animations, GPU-friendly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Orbs — static blur, CSS pulse only (compositor-thread, no JS) */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl hidden md:block ${prefersReducedMotion ? '' : 'animate-pulse'}`}
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        />

        {/* Geometric shapes — static, no animation */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-500/20 rounded-lg hidden lg:block" />
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 border-2 border-blue-500/20 rounded-full hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Name and Title — entrance animations run once and stop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-mono mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Hi, my name is
            </motion.h2>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-cyan-300 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.title}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { href: personalInfo.social.github, icon: FiGithub },
              { href: personalInfo.social.linkedin, icon: FiLinkedin },
              { href: personalInfo.social.email, icon: FiMail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator — CSS bounce, zero JS overhead */}
          <button
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-cyan-400 ${prefersReducedMotion ? '' : 'animate-bounce'}`}
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
          >
            <FiArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
