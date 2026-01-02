import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience, skills } from '../../data';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 bg-gray-900 flex items-center relative overflow-hidden"
    >
      {/* Enhanced Background decorative elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs - Reduced on mobile */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl hidden md:block"
          animate={prefersReducedMotion ? {} : {
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Animated code symbols - Hidden on mobile */}
        <motion.div
          className="absolute top-20 right-10 text-cyan-500/20 font-mono text-6xl transform hidden lg:block"
          animate={prefersReducedMotion ? {} : {
            rotate: [12, 20, 12],
            scale: [1, 1.1, 1],
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

        {/* Floating geometric shapes - Hidden on mobile */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-cyan-500/20 rounded-full hidden lg:block"
          animate={prefersReducedMotion ? {} : {
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Floating particles - Reduced count on mobile */}
        {[...Array(prefersReducedMotion ? 0 : 3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
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
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
          >
              {/* Decorative border */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 rounded-full"></div>

              <div className="space-y-6">
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 }}
                  >
                      Full Stack Software Engineer with <span className="text-cyan-400 font-semibold">2+ years of professional experience</span> building scalable,
                      production-ready applications. Specialized in React, Node.js, TypeScript, and cloud
                      infrastructure (AWS, Railway). I deliver end-to-end solutions that drive measurable
                      business impact.
                  </motion.p>
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 }}
                  >
                      As the founder of <span className="text-cyan-400 font-semibold">Reuel's Web Services</span>, I've architected and delivered complex systems
                      ranging from freight management platforms to AI-powered educational tools. My approach
                      emphasizes <span className="text-purple-400">clean, maintainable code</span>, comprehensive testing, and cross-functional
                      collaboration. I thrive in Agile environments where I can own features from conception
                      through deployment.
                  </motion.p>
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    I'm a <span className="text-cyan-400 font-semibold">rapid learner</span> who adapts to new technologies quickly, whether mastering a new cloud
                    platform or architecting systems from the ground up. My product-first mindset ensures
                    solutions align with business goals while maintaining technical excellence.
                </motion.p>
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 }}
                  >
                      Currently completing my <span className="text-cyan-400 font-semibold">BSc in Computer Science</span> at the University of Technology, Jamaica
                      (2025). Beyond coding, I'm deeply passionate about <span className="text-purple-400">basketball</span> – whether playing competitively or watching
                      the NBA. Music is another cornerstone of my life; I play multiple instruments including <span className="text-purple-400">guitar, piano, and drums</span>,
                      and I'm always exploring new genres and techniques. I also enjoy <span className="text-purple-400">gaming</span> as a way to unwind and connect with friends,
                      particularly strategy and RPG titles. These creative pursuits fuel my problem-solving abilities and keep me balanced.
                  </motion.p>
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                  >
                      I believe in <span className="text-cyan-400 font-semibold">continuous growth</span> – both professionally and personally. Whether it's learning
                      a new programming language, mastering a new song, or improving my basketball skills, I approach every challenge with curiosity
                      and determination. Fluent in <span className="text-purple-400">English</span> with basic <span className="text-purple-400">Spanish</span> proficiency.
                  </motion.p>
              </div>
          </motion.div>

            {/* Skills Grid - Categorized */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Technologies & Tools
              </h3>

              {/* Languages & Runtime */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold text-gray-300">Languages & Runtime</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {skills.languages.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ willChange: 'transform' }}
                      >
                        <skill.icon className={`${skill.color} text-3xl`} />
                        <span className="text-gray-300 text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Frontend Frameworks */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold text-gray-300">Frontend Frameworks</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {skills.frontend.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ willChange: 'transform' }}
                      >
                        <skill.icon className={`${skill.color} text-3xl`} />
                        <span className="text-gray-300 text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Backend & Databases */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold text-gray-300">Backend & Databases</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {skills.backend.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ willChange: 'transform' }}
                      >
                        <skill.icon className={`${skill.color} text-3xl`} />
                        <span className="text-gray-300 text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* DevOps & Cloud */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold text-gray-300">DevOps & Cloud</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {skills.devops.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ willChange: 'transform' }}
                      >
                        <skill.icon className={`${skill.color} text-3xl`} />
                        <span className="text-gray-300 text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Professional Practices */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold text-gray-300">Professional Practices</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {skills.practices.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ willChange: 'transform' }}
                      >
                        <skill.icon className={`${skill.color} text-3xl`} />
                        <span className="text-gray-300 text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Education & Experience Highlights */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Experience</h3>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">
                  {experience.yearsOfExperience} Years
                </p>
                <p className="text-gray-400">Building Production Applications</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">
                  {experience.education.degree}
                </p>
                <p className="text-gray-400">{experience.education.institution}</p>
                <p className="text-gray-500">{experience.education.status} {experience.education.year}</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Current Role</h3>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">
                  {experience.current.title}
                </p>
                <p className="text-gray-400">{experience.current.company}</p>
                <p className="text-gray-500">{experience.current.period}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
