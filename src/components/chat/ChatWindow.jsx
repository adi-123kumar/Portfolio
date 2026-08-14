import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage.jsx';
import { useChat } from './useChat.js';

export default function ChatWindow({ onClose }) {
  const { messages, sendMessage, isLoading } = useChat();
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = input;
    setInput('');
    sendMessage(text);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[520px] flex flex-col rounded-xl border border-border bg-bg shadow-2xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface">
        <p className="font-display font-bold text-sm">Ask about me</p>
        <button onClick={onClose} aria-label="Close chat" className="text-muted hover:text-text">
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface border border-border rounded-lg px-3.5 py-2 text-sm text-muted">
              Thinking…
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-border bg-surface">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. What's their experience with React?"
          className="flex-1 bg-bg border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-3 py-2 rounded-md bg-accent text-bg text-sm font-medium disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}
