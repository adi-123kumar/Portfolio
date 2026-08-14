import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3.5 py-2 text-sm leading-relaxed ${
          isUser
            ? 'bg-accent text-bg'
            : 'bg-surface border border-border text-text'
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
