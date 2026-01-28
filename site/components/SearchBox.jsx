'use client';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

export default function SearchBox({ data, onResults }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      onResults(data);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ['title', 'summary', 'body'],
      threshold: 0.34,
      minMatchCharLength: 2
    });
    const res = fuse.search(query).map((r) => r.item);
    onResults(res);
  }, [query, data, onResults]);

  return (
    <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索标题 / 摘要 / 正文"
        style={{
          flex: 1,
          padding: '12px 14px',
          borderRadius: 12,
          border: '1px solid var(--border)',
          fontSize: 15
        }}
      />
      <span className="muted" style={{ fontSize: 13 }}>共 {data.length} 条</span>
    </div>
  );
}
