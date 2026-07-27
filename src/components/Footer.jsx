import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data';
import { scrollToSection } from '../utils/scrollTo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: personalInfo.social.github },
    { name: 'LinkedIn', icon: FiLinkedin, url: personalInfo.social.linkedin },
    { name: 'Email', icon: FiMail, url: personalInfo.social.email },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="relative bg-canvas border-t border-border overflow-hidden">
      {/* Static background — no JS animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Reufolio Logo" className="w-10 h-10" />
              <h3 className="font-mono text-xl font-semibold text-text-primary">
                reufolio<span className="text-accent-cyan">.</span>
              </h3>
            </div>
            <p className="text-text-secondary">
              Building exceptional digital experiences, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-text-secondary/60 mb-4">// quick_links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                  >
                    {item.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-mono text-sm text-text-secondary/60 mb-4">// connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-11 h-11 rounded-md border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors duration-300"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-text-secondary/70 text-sm font-mono">
            © {currentYear} {personalInfo.name} · {personalInfo.location}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
