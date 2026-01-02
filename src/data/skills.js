import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql,
  SiPython, SiAmazon, SiTailwindcss, SiPhp,
  SiTypescript, SiDotnet, SiVuedotjs, SiNextdotjs, SiMysql,
  SiGithub, SiHtml5, SiCss3, SiDocker, SiGoogle
} from 'react-icons/si';
import { FaJava, FaDatabase, FaServer, FaCodeBranch, FaUsers, FaCheckCircle, FaBook } from 'react-icons/fa';

export const skills = {
  languages: [
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-orange-500' },
    { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
    { name: 'C#', icon: SiDotnet, color: 'text-purple-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' }
  ],
  frontend: [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' }
  ],
  backend: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'RESTful APIs', icon: FaDatabase, color: 'text-cyan-400' }
  ],
  devops: [
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'AWS (EC2, S3, SES)', icon: SiAmazon, color: 'text-orange-400' },
    { name: 'Google Cloud Platform', icon: SiGoogle, color: 'text-red-400' },
    { name: 'Railway', icon: FaServer, color: 'text-purple-400' },
    { name: 'Git', icon: SiGithub, color: 'text-gray-300' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
    { name: 'CI/CD', icon: FaCodeBranch, color: 'text-green-400' }
  ],
  practices: [
    { name: 'Agile', icon: FaUsers, color: 'text-blue-400' },
    { name: 'Testing', icon: FaCheckCircle, color: 'text-green-400' },
    { name: 'Code Reviews', icon: FaCodeBranch, color: 'text-purple-400' },
    { name: 'Documentation', icon: FaBook, color: 'text-cyan-400' }
  ]
};

export const skillsFlat = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.devops,
  ...skills.practices
];
