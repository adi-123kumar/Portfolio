import { motion } from 'framer-motion';
import StarField from '../../common/StarField.jsx';

export default function Hero() {
  return (
    <section className="section min-h-[80vh] flex items-center relative overflow-hidden">
      <StarField density={80} className="opacity-70" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-[0_0_40px_-10px_rgb(94,234,212,0.5)]"
        >
          <img
            src="/profile.jpeg"
            alt="Portrait"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
            Software Developer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-xl">
            I build things that live on the internet.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted text-lg mt-6 max-w-xl">
            Your one-line value proposition — what you build, for whom, and
            what makes your approach different.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px -8px rgba(94,234,212,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-md bg-accent text-bg font-medium"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-md border border-border hover:border-accent"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}