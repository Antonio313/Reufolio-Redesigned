import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { projects } from '../../data';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Enhanced Background with animations - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>

        {/* Animated gradient orbs - Reduced on mobile */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/5 rounded-full blur-3xl hidden md:block"
          animate={prefersReducedMotion ? {} : {
            scale: [1.3, 1, 1.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Floating code symbols - Hidden on mobile */}
        <motion.div
          className="absolute top-40 right-32 text-cyan-500/10 font-mono text-7xl hidden lg:block"
          animate={prefersReducedMotion ? {} : {
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        >
          {'</>'}
        </motion.div>

        {/* Geometric shapes - Hidden on mobile */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-cyan-500/20 rounded-lg hidden lg:block"
          animate={prefersReducedMotion ? {} : {
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Floating particles - Drastically reduced on mobile */}
        {[...Array(prefersReducedMotion ? 0 : 3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`relative group ${
                  project.featured ? 'mb-8' : ''
                }`}
              >
                <motion.div
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden ${
                    project.featured
                      ? 'shadow-xl hover:shadow-cyan-500/30'
                      : ''
                  }`}
                  whileHover={{ y: -5 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="p-8">
                    {/* Project Header with Badges */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-start gap-2 mb-3">
                        {project.featured && (
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                        {project.status === 'wip' && (
                          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full">
                            Work in Progress
                          </span>
                        )}
                        {project.status === 'live' && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                            Live
                          </span>
                        )}
                        {project.role && (
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full">
                            {project.role}
                          </span>
                        )}
                      </div>

                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-4">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiGithub size={24} />
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiExternalLink size={24} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm text-purple-300"
                          >
                            <FiCheckCircle className="text-purple-400" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack - Categorized */}
                    <div className="space-y-3">
                      {project.tech.frontend && project.tech.frontend.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Frontend</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.frontend.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-cyan-900/50 text-cyan-400 rounded-lg text-sm font-mono border border-cyan-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.tech.backend && project.tech.backend.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Backend</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.backend.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-blue-900/50 text-blue-400 rounded-lg text-sm font-mono border border-blue-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.tech.devops && project.tech.devops.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">DevOps</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.devops.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-purple-900/50 text-purple-400 rounded-lg text-sm font-mono border border-purple-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/Antonio313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={24} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
