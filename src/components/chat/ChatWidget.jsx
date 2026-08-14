import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChatWindow from './ChatWindow.jsx';

// This is the only piece App.jsx needs to know about. It owns its own
// open/closed state — nothing else in the app needs to be aware of the chat.
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat about me'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center shadow-lg"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>
    </>
  );
}
