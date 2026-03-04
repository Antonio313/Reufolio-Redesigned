import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';

const IntroVideo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!personalInfo.introVideoUrl) return;
    const shown = sessionStorage.getItem('reufolio_intro_shown');
    if (!shown) {
      setIsVisible(true);
    }
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('reufolio_intro_shown', 'true');
    setIsVisible(false);
  };

  if (!personalInfo.introVideoUrl) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          {/* Logo / branding */}
          <motion.div
            className="mb-4 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Reufolio" className="h-8 w-8" />
              <span className="text-white font-bold text-xl tracking-wide">Reufolio</span>
            </div>
            <p className="text-gray-400 text-sm">Welcome to my Portfolio. Here's a video introduction.</p>
          </motion.div>

          {/* YouTube iframe */}
          <motion.div
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src={`${personalInfo.introVideoUrl}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Portfolio Introduction"
            />
          </motion.div>

          {/* Skip button — appears after 1.5s */}
          <motion.button
            onClick={handleSkip}
            className="mt-8 px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;
