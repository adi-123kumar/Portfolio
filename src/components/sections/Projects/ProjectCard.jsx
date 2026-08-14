import { useRef } from 'react';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-lg border border-border bg-surface p-6 flex flex-col gap-3 overflow-hidden card-hover"
    >
      {/* spotlight glow that follows the cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(94,234,212,0.12), transparent 70%)',
        }}
      />
      <div className="relative">
        <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-sm text-muted mt-2"><span className="text-text">Problem:</span> {project.problem}</p>
        <p className="text-sm text-muted mt-2"><span className="text-text">Solution:</span> {project.solution}</p>
        <p className="text-sm text-muted mt-2"><span className="text-text">Impact:</span> {project.impact}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono px-2 py-1 rounded bg-bg border border-border text-muted transition-colors group-hover:border-accent">{s}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-sm">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">Live demo</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">Source</a>}
        </div>
      </div>
    </article>
  );
}