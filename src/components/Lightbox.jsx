import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

const Lightbox = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [goNext, goPrev, onClose]);

  const currentImage = images[currentIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-black/95 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white p-2 z-10 transition-colors"
        aria-label="Close lightbox"
      >
        <FiX size={28} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono select-none">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main image area */}
      <div
        className="relative w-full max-w-5xl px-16 flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev arrow */}
        {images.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-2 text-white/60 hover:text-cyan-400 p-2 z-10 transition-colors"
            aria-label="Previous image"
          >
            <FiChevronLeft size={40} />
          </button>
        )}

        {/* Sliding image */}
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full flex flex-col items-center"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[70vh] max-w-full object-contain rounded-lg"
            />
            {currentImage.caption && (
              <p className="text-center text-gray-400 text-sm mt-4 max-w-xl px-4">
                {currentImage.caption}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Next arrow */}
        {images.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 text-white/60 hover:text-cyan-400 p-2 z-10 transition-colors"
            aria-label="Next image"
          >
            <FiChevronRight size={40} />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div
          className="flex gap-2 mt-6 px-4 overflow-x-auto max-w-2xl pb-1"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                idx === currentIndex
                  ? 'border-cyan-400 opacity-100'
                  : 'border-transparent opacity-40 hover:opacity-70'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Lightbox;
