import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../../data';

const statusBadge = (status) => {
  if (status === 'live') return <span className="px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">Live</span>;
  if (status === 'wip') return <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">In Progress</span>;
  if (status === 'academic') return <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">Capstone</span>;
  return null;
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Static background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute top-40 right-32 text-cyan-500/10 font-mono text-7xl hidden lg:block select-none">{'</>'}</div>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-cyan-500/10 rounded-lg hidden lg:block" />
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
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>

          {/* 2-column grid on md+, single column on mobile */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project) => {
              const topTech = [
                ...(project.tech.frontend || []),
                ...(project.tech.backend || []),
                ...(project.tech.devops || []),
              ].slice(0, 4);

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group h-full"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="block h-full"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
                      whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    >
                      <div className="p-6 flex flex-col flex-1">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {statusBadge(project.status)}
                          {project.role && (
                            <span className="px-2.5 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                              {project.role}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>

                        {/* Short description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.shortDescription}
                        </p>

                        {/* Top 4 tech pills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topTech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-md text-xs font-mono border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Spacer pushes "View Project" to bottom */}
                        <div className="flex-1" />

                        {/* Hover CTA */}
                        <p className="text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Project →
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* View More on GitHub */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/Antonio313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-colors duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
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
