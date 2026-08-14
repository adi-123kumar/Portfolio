import { motion } from 'framer-motion';
import { experience } from '../../../data/experience.js';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.p {...useScrollAnimation()} className="eyebrow">Experience</motion.p>
      <motion.h2 {...useScrollAnimation(0.1)} className="font-display font-bold text-3xl mb-8">Where I've worked</motion.h2>
      <div className="border-l border-border pl-6 space-y-8">
        {experience.map((e, i) => (
          <motion.div key={e.id} {...useScrollAnimation(0.1 * i)} className="relative group">
            <motion.span
              className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent"
              animate={{ boxShadow: ['0 0 0 0 rgba(94,234,212,0.5)', '0 0 0 8px rgba(94,234,212,0)'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
            <p className="font-mono text-xs text-muted">{e.period}</p>
            <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors">{e.role} · {e.company}</h3>
            <p className="text-sm text-muted mt-1">{e.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}