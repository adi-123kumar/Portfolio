import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation.js';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) { setStatus('success'); form.reset(); } else { setStatus('error'); }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section text-center">
      <motion.p {...useScrollAnimation()} className="eyebrow">Contact</motion.p>
      <motion.h2 {...useScrollAnimation(0.1)} className="font-display font-bold text-3xl mb-4">Let's talk</motion.h2>
      <motion.p {...useScrollAnimation(0.15)} className="text-muted max-w-md mx-auto mb-6">
        Open to opportunities and interesting projects. Reach out directly,
        or ask my assistant (bottom-right) about my background first.
      </motion.p>

      {status === 'success' ? (
        <p className="text-accent font-medium">Thanks — your message has been sent. I'll get back to you soon.</p>
      ) : (
        <motion.form {...useScrollAnimation(0.2)} onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
          <input name="email" type="email" required placeholder="Your email" className="bg-surface border border-border rounded-md px-4 py-2.5 outline-none focus:border-accent transition-colors" />
          <textarea name="message" required placeholder="Your message" rows="4" className="bg-surface border border-border rounded-md px-4 py-2.5 outline-none focus:border-accent transition-colors" />
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 8px 30px -8px rgba(94,234,212,0.6)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'sending'}
            className="px-5 py-2.5 rounded-md bg-accent text-bg font-medium disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </motion.button>
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Couldn't send — check that FORMSPREE_ENDPOINT in Contact.jsx points to your real form ID.
            </p>
          )}
        </motion.form>
      )}
    </section>
  );
}