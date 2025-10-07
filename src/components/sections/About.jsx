import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiC,
  SiCplusplus,
  SiAmazon,
  SiTailwindcss,
  SiPhp,
  SiTypescript,
  SiDotnet,
  SiLaravel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'React Native', icon: TbBrandReactNative, color: 'text-cyan-300' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-orange-500' },
    { name: 'C', icon: SiC, color: 'text-blue-500' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'ASP.NET', icon: SiDotnet, color: 'text-purple-500' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
    { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
    { name: 'AWS', icon: SiAmazon, color: 'text-orange-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 bg-gray-900 flex items-center relative overflow-hidden"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated code symbols */}
        <motion.div
          className="absolute top-20 right-10 text-cyan-500/20 font-mono text-6xl transform"
          animate={{
            rotate: [12, 20, 12],
            scale: [1, 1.1, 1],
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
          className="absolute bottom-40 left-10 text-purple-500/20 font-mono text-5xl transform"
          animate={{
            rotate: [-12, -20, -12],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {'{ }'}
        </motion.div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-cyan-500/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-500/20 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-16 h-16 bg-blue-500/10 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
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
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
          >
              {/* Decorative border */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 rounded-full"></div>

              <div className="space-y-6">
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                  >
                      I'm a passionate and results-driven software engineer specializing in full-stack development, with a proven track record of building clean, maintainable, 
                      and impactful digital solutions. I have honed my expertise while completing my <span className="text-cyan-400 font-semibold">BSc. in Computing at the University of Technology, Jamaica</span>, set to graduate in 2025.
                  </motion.p>
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                  >
                      As the founder of <span className="text-cyan-400 font-semibold">Reuel's Web Services</span>, I thrive on tackling complex challenges—from designing a comprehensive <span className="text-purple-400">JavaFX Point of Sale system</span> 
                      for an auto parts retailer to developing full-stack applications that boost client efficiency by up to <span className="text-purple-400">80%</span>. 
                      I'm a hardcore problem solver at heart; I don't just write code, I <span className="text-cyan-400 font-semibold">get things done</span>, delivering robust applications like 
                      the <span className="text-purple-400">AI Code Grader</span> and scalable cloud-hosted portfolios.
                  </motion.p>
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    What truly drives me is the opportunity to solve novel problems. I'm an <span className="text-cyan-400 font-semibold">adaptable and rapid learner</span>, 
                    consistently diving into new technologies and frameworks to find the optimal solution for each unique challenge. 
                    Whether it's mastering a new cloud platform or architecting a system from the ground up, I find genuine excitement in turning complex requirements into elegant, functional reality.
                </motion.p>
                  <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                  >
                      When I'm not architecting software solutions or delving into new technologies, I recharge by playing basketball, 
                      playing video games, and performing music on various instruments. I am deeply committed to continuous learning and passionately believe in pushing the boundaries of technology to create a tangible difference.
                  </motion.p>
              </div>
          </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Technologies & Tools
              </h3>
              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer"
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <skill.icon className={`${skill.color} text-4xl`} />
                      <span className="text-gray-300 text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Education & Experience Highlights */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">
                  BSc. in Computing
                </p>
                <p className="text-gray-400">University of Technology, Jamaica</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Current Role</h3>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">
                  Software Engineer
                </p>
                <p className="text-gray-400">Reuel's Web Services</p>
                <p className="text-gray-500">2024 - Present</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
