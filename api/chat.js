// Vercel serverless function -> deployed automatically at /api/chat
// Netlify equivalent would live at netlify/functions/chat.js with a
// slightly different handler signature — logic below is the same either way.

import { RESUME_CONTEXT } from './resume-context.js';

const SYSTEM_PROMPT = `You are an assistant embedded on Your Name's portfolio website.
You answer questions ONLY about Your Name — their background, skills, experience, and projects —
using the information below. This is the complete and only source of truth; do not invent facts
that aren't in it.

If asked anything unrelated to Your Name (general knowledge, coding help unrelated to their work,
other people, etc.), politely decline and redirect back to their portfolio, e.g.:
"I can only answer questions about Your Name's background and work — feel free to ask me about
their experience, skills, or projects."

Keep answers concise (2-4 sentences unless asked for detail) and speak about them in third person.

--- RESUME CONTEXT START ---
${RESUME_CONTEXT}
--- RESUME CONTEXT END ---`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Only keep the last N turns to bound cost/latency — the system prompt
  // already carries all the "knowledge", so long history isn't needed.
  const trimmed = messages.slice(-10).map((m) => ({
    role: m.role === 'user' ? 'user' : 'assistant',
    content: String(m.content).slice(0, 2000), // guard against huge payloads
  }));

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // free tier on Groq as of writing — check console.groq.com for current model names
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmed],
        temperature: 0.4,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Groq API error:', text);
      return res.status(502).json({ error: 'Upstream LLM error' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat function error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
