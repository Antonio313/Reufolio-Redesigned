import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollTo';

export const editorTabs = [
  { label: 'hero.tsx', id: 'home' },
  { label: 'about.md', id: 'about' },
  { label: 'projects/', id: 'projects' },
  { label: 'contact.ts', id: 'contact' },
];

const EditorTabs = ({ activeId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-border bg-surface-raised overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex items-center gap-1 font-mono text-sm">
        {editorTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => goToSection(tab.id)}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors duration-200 ${
              tab.id === activeId
                ? 'text-accent-cyan bg-canvas border border-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EditorTabs;
