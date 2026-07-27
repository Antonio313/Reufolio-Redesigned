import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data';
import { scrollToSection } from '../../utils/scrollTo';
import EditorWindow from '../EditorWindow';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();

  const [typedLength, setTypedLength] = useState(
    prefersReducedMotion ? personalInfo.tagline.length : 0
  );

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setTypedLength(count);
      if (count >= personalInfo.tagline.length) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const isTyping = typedLength < personalInfo.tagline.length;

  const goToSection = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-canvas py-28 md:py-20"
    >
      {/* Static background — dot grid + one static glow, no animate-pulse (perf-friendly) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgb(var(--color-border)/0.6)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl hidden md:block" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <EditorWindow activeId="home">
          {/* Code body */}
          <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 sm:px-8 py-8 sm:py-10 font-mono text-sm sm:text-base leading-relaxed">
            {[
              <><span className="text-accent-purple">const</span> <span className="text-text-primary">developer</span> <span className="text-text-secondary">= {'{'}</span></>,
              <>
                <span className="text-text-secondary">name:</span>{' '}
                <span className="text-accent-green">'{personalInfo.name}'</span>
                <span className="text-text-secondary">,</span>
              </>,
              <>
                <span className="text-text-secondary">role:</span>{' '}
                <span className="text-accent-green">'{personalInfo.title}'</span>
                <span className="text-text-secondary">,</span>
              </>,
              <>
                <span className="text-text-secondary">location:</span>{' '}
                <span className="text-accent-green">'{personalInfo.location}'</span>
                <span className="text-text-secondary">,</span>
              </>,
              <>
                <span className="text-text-secondary">status:</span>{' '}
                <span className="text-accent-green">'available_for_hire'</span>
                <span className="text-text-secondary">,</span>{' '}
                <span className="inline-flex items-center gap-1.5 align-middle">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-text-secondary text-xs italic">// open to work</span>
                </span>
              </>,
              <span className="text-text-secondary">
                {'}'}
                <span className="cursor-blink inline-block w-2 h-4 sm:h-5 bg-accent-cyan ml-1 align-middle" />
              </span>,
            ].map((line, index) => (
              <div key={index} className="contents">
                <span className="text-text-secondary/40 text-right select-none text-xs sm:text-sm pt-0.5">
                  {index + 1}
                </span>
                <div className={index > 0 && index < 5 ? 'pl-4' : ''}>{line}</div>
              </div>
            ))}

            {/* Blank line + typed tagline as a comment block */}
            <span className="text-text-secondary/40 text-right select-none text-xs sm:text-sm pt-0.5">
              {' '}
            </span>
            <div />
            <span className="text-text-secondary/40 text-right select-none text-xs sm:text-sm pt-0.5">7</span>
            <div className="text-text-secondary italic text-xs sm:text-sm leading-relaxed">
              {'/** '}
              {personalInfo.tagline.slice(0, typedLength)}
              {isTyping && <span className="cursor-blink inline-block w-1.5 h-3 bg-text-secondary ml-0.5 align-middle" />}
              {!isTyping && ' */'}
            </div>
          </div>
        </EditorWindow>
        </motion.div>

        {/* CTA + Social */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 font-mono text-sm w-full sm:w-auto">
            <motion.button
              onClick={() => goToSection('projects')}
              className="px-6 py-3 rounded-md bg-accent-cyan text-canvas font-semibold hover:bg-accent-cyan/90 transition-colors duration-200"
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              $ view --projects
            </motion.button>
            <motion.button
              onClick={() => goToSection('contact')}
              className="px-6 py-3 rounded-md border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-colors duration-200"
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              $ contact --me
            </motion.button>
          </div>

          <div className="flex gap-3">
            {[
              { href: personalInfo.social.github, icon: FiGithub, label: 'GitHub' },
              { href: personalInfo.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              { href: personalInfo.social.email, icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors duration-200"
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator — CSS bounce only, zero JS overhead */}
        <button
          className="hidden sm:flex flex-col items-center gap-1 mx-auto mt-14 text-text-secondary hover:text-accent-cyan transition-colors duration-200"
          onClick={() => goToSection('about')}
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-xs">scroll</span>
          <FiArrowDown size={18} className={prefersReducedMotion ? '' : 'animate-bounce'} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
