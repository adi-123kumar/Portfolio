import { useTheme } from '../../context/ThemeContext.jsx';
import { socials } from '../../data/socials.js';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="font-display font-bold text-lg">
          ADITYA KUMAR<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <a
                href={l.href}
                className="hover:text-text transition-colors"
              >
                {l.label}
              </a>

              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="text-muted hover:text-text transition-colors"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <a
            href={socials.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          >
            Résumé
          </a>

        </div>
      </nav>
    </header>
  );
}