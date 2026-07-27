import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import ScrollProgress from '../components/ScrollProgress';

const statusConfig = {
  live: { label: 'Live', classes: 'bg-accent-green/10 text-accent-green border border-accent-green/30' },
  wip: { label: 'Work in Progress', classes: 'bg-accent-amber/10 text-accent-amber border border-accent-amber/30' },
  academic: { label: 'Capstone Project', classes: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/30' },
  shelved: { label: 'Shelved', classes: 'bg-surface-raised text-text-secondary border border-border' },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [lightboxState, setLightboxState] = useState({ open: false, index: 0 });
  const [showAllImages, setShowAllImages] = useState(false);
  const IMAGE_LIMIT = 6;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="bg-canvas min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-6xl font-bold text-border mb-4">404</p>
          <h1 className="text-2xl font-bold text-text-primary mb-6">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent-cyan hover:text-accent-cyan/80 underline transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const status = statusConfig[project.status] || statusConfig.shelved;
  const hasBlogContent = project.blogContent?.length > 0;
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="bg-canvas min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">

        {/* Back navigation */}
        <motion.button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors mb-10 group"
          {...fadeUp(0)}
          whileHover={{ x: -4 }}
        >
          <FiArrowLeft className="group-hover:text-accent-cyan transition-colors" />
          <span>back to projects</span>
        </motion.button>

        {/* ── Hero ── */}
        <motion.section className="mb-14" {...fadeUp(0.05)}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${status.classes}`}>
              {status.label}
            </span>
            {project.role && (
              <span className="px-3 py-1 bg-accent-purple/10 text-accent-purple border border-accent-purple/30 text-sm font-semibold rounded-full">
                {project.role}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 text-sm font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-5 leading-tight">
            {project.title}
          </h1>

          <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 font-mono text-sm"
              >
                <FiGithub />
                github
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent-cyan text-canvas rounded-md font-mono text-sm font-semibold hover:bg-accent-cyan/90 transition-all duration-300"
              >
                <FiExternalLink />
                view live
              </a>
            )}
            {project.cmsUrl && (
              <a
                href={project.cmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 font-mono text-sm"
              >
                <FiExternalLink />
                view cms
              </a>
            )}
          </div>
        </motion.section>

        {/* ── Demo Video ── */}
        {project.videoUrl && (
          <motion.section className="mb-14" {...fadeUp(0.1)}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Project Demo</h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-raised border border-border shadow-xl shadow-black/50">
              <iframe
                src={`${project.videoUrl}?rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title={`${project.title} Demo`}
              />
            </div>
          </motion.section>
        )}

        {/* ── Screenshots / Lightbox ── */}
        {hasImages && (
          <motion.section className="mb-14" {...fadeUp(0.15)}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">
              Screenshots
              <span className="ml-3 text-sm font-normal text-text-secondary/60">({project.images.length})</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(showAllImages ? project.images : project.images.slice(0, IMAGE_LIMIT)).map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setLightboxState({ open: true, index: idx })}
                  className="relative group aspect-video overflow-hidden rounded-xl bg-surface-raised border border-border cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold bg-black/60 px-4 py-2 rounded-lg">
                      View
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {project.images.length > IMAGE_LIMIT && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllImages((prev) => !prev)}
                  className="px-6 py-2.5 border border-border rounded-md text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 text-sm font-mono"
                >
                  {showAllImages
                    ? 'Show Less'
                    : `See ${project.images.length - IMAGE_LIMIT} More Screenshot${project.images.length - IMAGE_LIMIT !== 1 ? 's' : ''}`}
                </button>
              </div>
            )}
          </motion.section>
        )}

        {/* ── More About ── */}
        {hasBlogContent && (
          <motion.section className="mb-14" {...fadeUp(0.2)}>
            <h2 className="text-2xl font-bold text-text-primary mb-6">More About {project.title}</h2>
            <div className="space-y-5">
              {project.blogContent.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Tech Stack ── */}
        <motion.section className="mb-14" {...fadeUp(0.25)}>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Tech Stack</h2>
          <div className="space-y-5">
            {project.tech.frontend?.length > 0 && (
              <div>
                <p className="font-mono text-xs text-text-secondary/60 uppercase tracking-widest mb-3">// frontend</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.frontend.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-accent-cyan/10 text-accent-cyan rounded-md text-sm font-mono border border-accent-cyan/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.tech.backend?.length > 0 && (
              <div>
                <p className="font-mono text-xs text-text-secondary/60 uppercase tracking-widest mb-3">// backend</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.backend.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-accent-purple/10 text-accent-purple rounded-md text-sm font-mono border border-accent-purple/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.tech.devops?.length > 0 && (
              <div>
                <p className="font-mono text-xs text-text-secondary/60 uppercase tracking-widest mb-3">// devops & cloud</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.devops.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-accent-amber/10 text-accent-amber rounded-md text-sm font-mono border border-accent-amber/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>


        {/* Bottom back button */}
        <motion.button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors group"
          {...fadeUp(0.35)}
          whileHover={{ x: -4 }}
        >
          <FiArrowLeft className="group-hover:text-accent-cyan transition-colors" />
          back to all projects
        </motion.button>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxState.open && hasImages && (
          <Lightbox
            images={project.images}
            initialIndex={lightboxState.index}
            onClose={() => setLightboxState({ open: false, index: 0 })}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
