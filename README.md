# Portfolio + AI Chat Assistant

React (Vite) portfolio with a floating chat widget that answers questions
about you, backed by a free LLM (Groq) via a serverless function.

## Folder structure

```
portfolio/
├── api/                        # Serverless functions (deployed by Vercel, NOT bundled by Vite)
│   ├── chat.js                 # POST /api/chat — calls Groq with resume context as system prompt
│   └── resume-context.js       # Your resume/bio as plain text — the "knowledge base"
│
├── public/                     # Static files served as-is
│   └── resume.pdf              # (add your actual PDF here)
│
├── src/
│   ├── main.jsx                # React entry — mounts <App/> inside <ThemeProvider/>
│   ├── App.jsx                 # Composes Layout + all sections in order
│   │
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, Layout — wrap every page
│   │   ├── sections/             # One folder per page section (Hero, About, Skills, Projects, Experience, Contact)
│   │   │   └── X/X.jsx           # Each section is self-contained: imports its own data, no cross-section coupling
│   │   ├── common/               # Small reusable pieces (buttons, headings) — currently empty, add as you need them
│   │   └── chat/                 # The AI widget, isolated from the rest of the UI
│   │       ├── ChatWidget.jsx    # Floating button — the only piece App.jsx imports
│   │       ├── ChatWindow.jsx    # Message list + input, shown when widget is open
│   │       ├── ChatMessage.jsx   # Single message bubble (renders markdown)
│   │       └── useChat.js        # Hook: owns message state, calls lib/api.js
│   │
│   ├── data/                    # Plain JS "content database" — projects.js, skills.js, experience.js, socials.js
│   │                             # Edit these files to update site content. No JSX touched.
│   ├── context/ThemeContext.jsx # Dark/light mode, exposed via useTheme()
│   ├── hooks/                   # Reusable hooks not tied to one component (add scroll-animation hooks etc. here)
│   ├── lib/api.js               # Frontend's only connection to the backend — fetch('/api/chat')
│   └── styles/globals.css       # Tailwind entry + base overrides
│
├── tailwind.config.js           # Design tokens: colors, fonts — change your palette here, once
├── vite.config.js
└── .env.example                 # Copy to .env, add your free Groq key (never committed)
```

## How the pieces connect

**Content flow (no chat involved):**
`data/*.js` → imported by a section component → rendered.
To add a new project, edit `data/projects.js` only — `Projects.jsx` maps over the array automatically.

**Chat flow:**
```
ChatWindow (input) → useChat.sendMessage() → lib/api.js sendChatMessage()
  → fetch POST /api/chat  (this crosses from browser to server)
  → api/chat.js reads GROQ_API_KEY from env (server-only, never sent to browser)
  → builds system prompt = instructions + resume-context.js content
  → calls Groq's chat completion API
  → returns { reply } → rendered as a new ChatMessage bubble
```

This is "RAG" in its simplest valid form: your whole resume is small enough
to fit in the system prompt directly, so there's no embeddings/vector-DB
step needed. If you later add many documents (multiple case studies, a blog
archive), that's when you'd add a real retrieval step — swap
`resume-context.js` for a similarity search over chunks, everything else
stays the same.

## Setup

```bash
npm install
cp .env.example .env        # then add your free Groq key from console.groq.com
npm run dev                 # frontend on :5173

# to test the /api function locally, install Vercel CLI:
npm i -g vercel
vercel dev                  # serves both frontend + /api on :3000
```

1. Edit `api/resume-context.js` with your real resume content.
2. Edit files in `src/data/` with your real projects/skills/experience.
3. Replace colors in `tailwind.config.js` if you want a different palette.
4. Add your resume PDF to `public/resume.pdf`.
5. Set the Contact form's `action` URL to your free Formspree/Web3Forms endpoint.

## Deploy (free)

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com) — it auto-detects Vite + the `/api` folder as serverless functions.
3. In Vercel project settings → Environment Variables, add `GROQ_API_KEY`.
4. Deploy. Done — frontend and chat backend are both live on the free tier.

## Extending later

- **More sections** → new folder in `components/sections/`, new file in `data/`, one import line in `App.jsx`.
- **Real RAG (multiple documents)** → chunk your docs, embed with a free embedding API (Gemini or a local model), store vectors in Supabase (free `pgvector`), do a similarity search inside `api/chat.js` before calling Groq.
- **Streaming responses** → Groq supports SSE streaming; swap the `fetch` in `chat.js` for a streamed response and update `useChat.js` to append tokens as they arrive.
