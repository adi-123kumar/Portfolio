import { motion } from 'framer-motion';
import { skillGroups } from '../../../data/skills.js';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.p {...useScrollAnimation()} className="eyebrow">Skills</motion.p>
      <motion.h2 {...useScrollAnimation(0.1)} className="font-display font-bold text-3xl mb-8">What I work with</motion.h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            {...useScrollAnimation(0.1 * i)}
            className="card-hover rounded-lg border border-border p-5 bg-surface"
          >
            <h3 className="font-mono text-sm text-accent mb-3">{group.category}</h3>
            <ul className="space-y-1 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="hover:text-text transition-colors">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}