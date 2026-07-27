import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { experience, skills } from '../../data';
import EditorWindow from '../EditorWindow';

const AnimatedCounter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillGroup = ({ label, items, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4 }}
  >
    <p className="font-mono text-xs text-text-secondary mb-3">// {label}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill.name}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-surface-raised hover:border-accent-cyan/50 transition-colors duration-200"
        >
          <skill.icon className={`${skill.color} text-sm`} />
          <span className="font-mono text-xs text-text-secondary">{skill.name}</span>
        </span>
      ))}
    </div>
  </motion.div>
);

const statCards = [
  { label: 'experience', value: <><AnimatedCounter target={2} suffix="+" /> <span className="text-lg">years</span></>, sub: 'Building production applications' },
  { label: 'projects', value: <AnimatedCounter target={5} suffix="+" />, sub: 'Production applications shipped' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const bioParagraphs = [
    <>I'm a <span className="text-accent-cyan font-semibold">Full Stack Software Engineer</span> with 2+ years of experience building scalable, production-ready applications. I work mostly with React, Node.js, TypeScript, and cloud infrastructure like AWS and Railway, and I enjoy taking products from idea to deployment.</>,
    <>As the founder of <span className="text-accent-cyan font-semibold">Reuel's Web Services</span>, I've built everything from freight management systems to AI-powered educational tools. I graduated with a <span className="text-accent-cyan font-semibold">BSc in Computer Science</span> from the University of Technology, Jamaica in 2025, and I combine that academic foundation with hands-on engineering experience in real projects. I care about writing <span className="text-accent-purple">clean, maintainable code</span>, testing thoroughly, and working well with others.</>,
    <>I also use AI tools like Claude Code to speed up the repetitive parts of development, but I stay fully responsible for the work and verify everything before it ships. I take a <span className="text-accent-cyan font-semibold">trust-but-verify approach</span>, similar to how a senior software engineer would use AI as a support tool, not a replacement for judgment.</>,
    <>I learn quickly, adapt easily to new technologies, and enjoy working in Agile environments where I can own features from start to finish. I'm especially drawn to forward-thinking teams where I can build useful products and contribute at scale.</>,
    <>Outside of work, I'm big on <span className="text-accent-purple">basketball</span>, music, and gaming. I play <span className="text-accent-purple">guitar, piano, and drums</span>, and I like to keep exploring new genres and techniques. I also enjoy <span className="text-accent-purple">strategy and RPG games</span> as a way to relax and stay connected with friends. I'm fluent in <span className="text-accent-purple">English</span> and have basic <span className="text-accent-purple">Spanish</span> proficiency.</>,
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 bg-canvas flex items-center relative overflow-hidden"
    >
      {/* Static background — no animate-pulse, GPU-friendly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl hidden md:block" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <EditorWindow activeId="about">
            <div className="p-6 sm:p-10 space-y-10">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-text-primary">
                <span className="text-accent-purple">#</span> About Me
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Bio */}
                <div className="space-y-5">
                  {bioParagraphs.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      className="text-text-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : i * 0.08 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-7">
                  <p className="font-mono text-xs text-text-secondary/60 uppercase tracking-widest">
                    technologies_and_tools.json
                  </p>
                  <SkillGroup label="languages & runtime" items={skills.languages} isInView={isInView} />
                  <SkillGroup label="frontend frameworks" items={skills.frontend} isInView={isInView} />
                  <SkillGroup label="backend & databases" items={skills.backend} isInView={isInView} />
                  <SkillGroup label="devops & cloud" items={skills.devops} isInView={isInView} />
                </div>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
                {statCards.map((card) => (
                  <div key={card.label} className="p-5 rounded-lg border border-border bg-surface-raised">
                    <p className="font-mono text-xs text-accent-cyan mb-2">// {card.label}</p>
                    <p className="text-2xl font-bold text-text-primary mb-1">{card.value}</p>
                    <p className="text-text-secondary text-sm">{card.sub}</p>
                  </div>
                ))}
                <div className="p-5 rounded-lg border border-border bg-surface-raised">
                  <p className="font-mono text-xs text-accent-cyan mb-2">// education</p>
                  <p className="text-text-primary font-semibold">{experience.education.degree}</p>
                  <p className="text-text-secondary text-sm">{experience.education.institution}</p>
                  <p className="text-text-secondary/70 text-xs mt-1">{experience.education.status} {experience.education.year}</p>
                </div>
                <div className="p-5 rounded-lg border border-border bg-surface-raised">
                  <p className="font-mono text-xs text-accent-cyan mb-2">// current_role</p>
                  <p className="text-text-primary font-semibold">{experience.current.title}</p>
                  <p className="text-text-secondary text-sm">{experience.current.company}</p>
                  <p className="text-text-secondary/70 text-xs mt-1">{experience.current.period}</p>
                </div>
              </div>
            </div>
          </EditorWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
