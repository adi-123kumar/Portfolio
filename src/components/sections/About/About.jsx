import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation.js';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.p {...useScrollAnimation()} className="eyebrow">About</motion.p>
      <motion.h2 {...useScrollAnimation(0.1)} className="font-display font-bold text-3xl mb-6">Who I am</motion.h2>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        <motion.p {...useScrollAnimation(0.2)} className="text-muted leading-relaxed max-w-2xl">
          Write 2–4 sentences here: your background, what kind of problems you
          like solving, and a personal detail that makes you memorable. Avoid
          generic phrasing like "passionate developer" — be specific.
        </motion.p>
        <motion.img
          {...useScrollAnimation(0.2)}
          src="/profile.jpg"
          alt="Portrait"
          className="w-40 h-40 rounded-lg object-cover border border-border shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    </section>
  );
}