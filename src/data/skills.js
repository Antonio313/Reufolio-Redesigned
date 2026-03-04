import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql,
  SiPython, SiAmazonwebservices, SiTailwindcss, SiPhp,
  SiTypescript, SiDotnet, SiVuedotjs, SiNextdotjs, SiMysql,
  SiGithub, SiHtml5, SiCss3, SiDocker, SiGoogle,
  SiExpress, SiRedis, SiSendgrid, SiOpenai, SiGithubactions, SiPrisma, SiFramer, SiMailtrap, SiEslint,
  SiVite, SiSocketdotio, SiSentry, SiTwilio, SiReactrouter
} from 'react-icons/si';
import {
  FaJava, FaDatabase, FaServer, FaCodeBranch,
  FaKey, FaLock, FaClipboardList, FaShieldAlt,
  FaLayerGroup, FaAtom, FaMobileAlt, FaPuzzlePiece, FaSync
} from 'react-icons/fa';

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
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
    { name: 'React Router', icon: SiReactrouter, color: 'text-red-400' },
    { name: 'shadcn/ui', icon: FaPuzzlePiece, color: 'text-gray-300' },
    { name: 'TanStack Query', icon: FaSync, color: 'text-orange-400' },
    { name: 'Zustand', icon: FaAtom, color: 'text-yellow-500' },
    { name: 'React Hook Form', icon: FaClipboardList, color: 'text-blue-400' },
    { name: 'Zod', icon: FaShieldAlt, color: 'text-blue-500' },
    { name: 'Socket.IO', icon: SiSocketdotio, color: 'text-gray-300' },
    { name: 'Auth.js', icon: FaKey, color: 'text-yellow-400' },
    { name: 'PWA', icon: FaMobileAlt, color: 'text-cyan-400' }
  ],
  backend: [
    { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-teal-400' },
    { name: 'RESTful APIs', icon: FaDatabase, color: 'text-cyan-400' },
    { name: 'OpenAI API', icon: SiOpenai, color: 'text-green-400' },
    { name: 'JWT Auth', icon: FaLock, color: 'text-yellow-500' },
    { name: 'Twilio', icon: SiTwilio, color: 'text-red-400' }
  ],
  devops: [
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'AWS (S3, CloudFront, SES)', icon: SiAmazonwebservices, color: 'text-orange-400' },
    { name: 'Google Cloud Platform', icon: SiGoogle, color: 'text-red-400' },
    { name: 'Railway', icon: FaServer, color: 'text-purple-400' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-300' },
    { name: 'Turborepo', icon: FaLayerGroup, color: 'text-red-400' },
    { name: 'Sentry', icon: SiSentry, color: 'text-purple-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
    { name: 'SendGrid', icon: SiSendgrid, color: 'text-blue-400' },
    { name: 'Mailtrap', icon: SiMailtrap, color: 'text-green-500' },
    { name: 'ESLint', icon: SiEslint, color: 'text-purple-500' },
    { name: 'CI/CD', icon: FaCodeBranch, color: 'text-green-400' }
  ]
};

export const skillsFlat = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.devops
];
