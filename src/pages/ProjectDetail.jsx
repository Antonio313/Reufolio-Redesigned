import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import ScrollProgress from '../components/ScrollProgress';

const statusConfig = {
  live: { label: 'Live', classes: 'bg-green-500/20 text-green-400 border border-green-500/30' },
  wip: { label: 'Work in Progress', classes: 'bg-amber-500/20 text-amber-400 border border-amber-500/30' },
  academic: { label: 'Capstone Project', classes: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' },
  shelved: { label: 'Shelved', classes: 'bg-gray-500/20 text-gray-400 border border-gray-500/30' },
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold text-gray-700 mb-4">404</p>
          <h1 className="text-2xl font-bold text-white mb-6">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
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
    <div className="bg-gray-900 min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">

        {/* Back navigation */}
        <motion.button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-10 group"
          {...fadeUp(0)}
          whileHover={{ x: -4 }}
        >
          <FiArrowLeft className="group-hover:text-cyan-400 transition-colors" />
          <span>Back to Projects</span>
        </motion.button>

        {/* ── Hero ── */}
        <motion.section className="mb-14" {...fadeUp(0.05)}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${status.classes}`}>
              {status.label}
            </span>
            {project.role && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 text-sm font-semibold rounded-full">
                {project.role}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-sm font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-cyan-400 bg-clip-text text-transparent mb-5 leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-600 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 font-medium"
              >
                <FiGithub />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <FiExternalLink />
                View Live
              </a>
            )}
            {project.cmsUrl && (
              <a
                href={project.cmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-600 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 font-medium"
              >
                <FiExternalLink />
                View CMS
              </a>
            )}
          </div>
        </motion.section>

        {/* ── Demo Video ── */}
        {project.videoUrl && (
          <motion.section className="mb-14" {...fadeUp(0.1)}>
            <h2 className="text-2xl font-bold text-white mb-5">Project Demo</h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800 border border-white/10 shadow-xl shadow-black/50">
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
            <h2 className="text-2xl font-bold text-white mb-5">
              Screenshots
              <span className="ml-3 text-sm font-normal text-gray-500">({project.images.length})</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(showAllImages ? project.images : project.images.slice(0, IMAGE_LIMIT)).map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setLightboxState({ open: true, index: idx })}
                  className="relative group aspect-video overflow-hidden rounded-xl bg-gray-800 border border-white/10 cursor-pointer"
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
                  className="px-6 py-2.5 border border-gray-600 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-white mb-6">More About {project.title}</h2>
            <div className="space-y-5">
              {project.blogContent.map((paragraph, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Tech Stack ── */}
        <motion.section className="mb-14" {...fadeUp(0.25)}>
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="space-y-5">
            {project.tech.frontend?.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-medium">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.frontend.map((t) => (
                    <span key={t} className="px-4 py-2 bg-cyan-900/40 text-cyan-300 rounded-lg text-sm font-mono border border-cyan-700/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.tech.backend?.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-medium">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.backend.map((t) => (
                    <span key={t} className="px-4 py-2 bg-blue-900/40 text-blue-300 rounded-lg text-sm font-mono border border-blue-700/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.tech.devops?.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-medium">DevOps & Cloud</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.devops.map((t) => (
                    <span key={t} className="px-4 py-2 bg-purple-900/40 text-purple-300 rounded-lg text-sm font-mono border border-purple-700/40">
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
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          {...fadeUp(0.35)}
          whileHover={{ x: -4 }}
        >
          <FiArrowLeft className="group-hover:text-cyan-400 transition-colors" />
          Back to All Projects
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
