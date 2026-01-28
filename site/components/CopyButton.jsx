'use client';
import { useState } from 'react';

export default function CopyButton({ text, label = '复制 Markdown' }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };
  return (
    <button className="button" onClick={copy} style={{ marginTop: 10 }}>
      {done ? '已复制' : label}
    </button>
  );
}
