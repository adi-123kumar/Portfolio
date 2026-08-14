// Thin wrapper around the serverless function. Keeping this in one place
// means if you ever rename/move the endpoint, only this file changes.
export async function sendChatMessage(messages) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }

  return res.json(); // { reply: string }
}
