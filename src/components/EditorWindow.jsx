import EditorTabs from './EditorTabs';

const EditorWindow = ({ activeId, children, className = '' }) => (
  <div className={`rounded-lg border border-border bg-surface shadow-2xl shadow-black/30 overflow-hidden ${className}`}>
    <EditorTabs activeId={activeId} />
    {children}
  </div>
);

export default EditorWindow;
