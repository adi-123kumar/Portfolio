import { motion } from 'framer-motion';
import { projects } from '../../../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.p {...useScrollAnimation()} className="eyebrow">Projects</motion.p>
      <motion.h2 {...useScrollAnimation(0.1)} className="font-display font-bold text-3xl mb-8">Selected work</motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.id} {...useScrollAnimation(0.1 * i)}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}