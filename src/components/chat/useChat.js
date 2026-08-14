import { useState } from 'react';
import { sendChatMessage } from '../../lib/api.js';

const WELCOME = {
  role: 'assistant',
  content: "Hi! I'm an AI assistant trained on Your Name's resume. Ask me about their experience, skills, or projects.",
};

export function useChat() {
  const [messages, setMessages] = useState([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);
    setError(null);

    try {
      // Only send role+content history — the resume context is injected
      // server-side, never sent from the client.
      const { reply } = await sendChatMessage(nextMessages);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Sorry, I couldn't reach the server. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, sendMessage, isLoading, error };
}
