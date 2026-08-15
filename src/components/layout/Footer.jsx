import { socials } from '../../data/socials.js';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center text-sm text-muted">
      <div className="flex justify-center gap-6 mb-4">
        {socials.links.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            {s.label}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Aditya Kumar. Built with React + Tailwind.</p>
    </footer>
  );
}
