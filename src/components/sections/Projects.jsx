import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data';
import EditorWindow from '../EditorWindow';

const statusConfig = {
  live: { label: 'live', dot: 'bg-accent-green', text: 'text-accent-green' },
  wip: { label: 'in_progress', dot: 'bg-accent-amber', text: 'text-accent-amber' },
  academic: { label: 'capstone', dot: 'bg-accent-purple', text: 'text-accent-purple' },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 bg-canvas relative overflow-hidden"
    >
      {/* Static background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl hidden md:block" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <EditorWindow activeId="projects">
            <div className="p-6 sm:p-10">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-text-primary mb-8">
                <span className="text-accent-purple">#</span> Featured Projects
              </h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {projects.map((project) => {
                  const status = statusConfig[project.status] || statusConfig.live;
                  const topTech = [
                    ...(project.tech.frontend || []),
                    ...(project.tech.backend || []),
                    ...(project.tech.devops || []),
                  ].slice(0, 4);

                  return (
                    <motion.div key={project.id} variants={itemVariants} className="group h-full">
                      <Link to={`/projects/${project.id}`} className="block h-full">
                        <motion.div
                          className="h-full rounded-lg border border-border bg-surface-raised hover:border-accent-cyan/50 transition-colors duration-300 overflow-hidden flex flex-col"
                          whileHover={prefersReducedMotion ? {} : { y: -3 }}
                        >
                          <div className="p-5 flex flex-col flex-1">
                            {/* Path + status */}
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-mono text-xs text-text-secondary/60 truncate">
                                ~/projects/{project.id}
                              </p>
                              <span className={`flex items-center gap-1.5 font-mono text-xs ${status.text} shrink-0 ml-2`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                {status.label}
                              </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                              {project.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                              {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {topTech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-canvas text-text-secondary rounded-md text-xs font-mono border border-border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="flex-1" />

                            <p className="flex items-center gap-1.5 text-accent-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              cd ./{project.id} <FiArrowRight size={14} />
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="https://github.com/Antonio313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan font-mono text-sm transition-colors duration-300"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiGithub size={16} />
                  $ view --more on github
                </motion.a>
              </motion.div>
            </div>
          </EditorWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
