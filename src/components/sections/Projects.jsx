import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Reufolio - Digital Portfolio (initial release)',
      description:
        'A modern, responsive portfolio website showcasing my software engineering projects and skills. Features include smooth animations, contact form with email integration, and resume download functionality. Built with performance and user experience in mind.',
      tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
      github: 'https://github.com/Antonio313',
      live: 'https://reufolio.com',
      featured: true,
    },
    {
      title: 'Pongs Shipping - Freight Management System',
      description:
        'A comprehensive full-stack web application for a freight forwarding company that streamlines package management from the US to Jamaica. Implemented real-time tracking, automated email notifications, and cloud storage solutions. The platform improved operational efficiency by 80% through seamless CI/CD deployment and AWS integration.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'SendGrid', 'Railway'],
      github: '',
      live: 'https://pongsshipping.com',
      featured: true,
    },
    {
      title: 'ByteGrade - AI Code Grading System',
      description:
        'Led frontend development for an automated grading platform that evaluates code submissions in C, C++, Python, and Java. The system provides instant feedback to students and allows lecturers to manage assignments efficiently. Designed with a focus on responsive design and intuitive user interface, making code evaluation accessible and efficient.',
      tech: ['React', 'MongoDB', 'AWS', 'RESTful API', 'Material-UI'],
      github: '',
      live: 'https://bytegrade.online',
      featured: true,
    },
    {
      title: 'Academic Ticketing System',
      description:
        'Developed an internal ticketing system to facilitate communication between students, academic advisors, and supervisors regarding university and curriculum-related issues. The system includes role-based access control, real-time notifications, and comprehensive reporting features to track and resolve student concerns efficiently.',
      tech: ['Java', 'MySQL', 'JavaFX', 'JDBC'],
      github: '',
      live: '',
      featured: false,
    },
    {
      title: 'Auto Parts POS System',
      description:
        'Designed and implemented a comprehensive Point of Sale system for an auto parts retailer using JavaFX. Features include inventory management, sales tracking, customer management, and detailed reporting capabilities. The system streamlined retail operations and improved transaction processing speed.',
      tech: ['JavaFX', 'MySQL', 'Java', 'Scene Builder'],
      github: '',
      live: '',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
      {/* Enhanced Background with animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating code symbols */}
        <motion.div
          className="absolute top-40 right-32 text-cyan-500/10 font-mono text-7xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-purple-500/10 font-mono text-6xl"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {'{}'}
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-cyan-500/20 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-purple-500/20"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-12 h-12 border-2 border-blue-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
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
          transition={{ duration: 0.6 }}
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
            {projects.map((project, index) => (
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
                >
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-3">
                            Featured
                          </span>
                        )}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                      </div>
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

                    {/* Project Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-900/50 text-cyan-400 rounded-lg text-sm font-mono border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
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
            transition={{ delay: 0.8 }}
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
