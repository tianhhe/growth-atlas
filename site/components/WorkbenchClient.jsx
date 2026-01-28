'use client';
import { useState } from 'react';

export default function WorkbenchClient({ nodes }) {
  const [selected, setSelected] = useState([]);
  const toggle = (id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };
  const markdown = selected.map((id) => {
    const n = nodes.find((x) => x.id === id);
    return n ? `## ${n.title}\n${n.summary}\n` : '';
  }).join('\n');

  return (
    <div>
      <div className="card" style={{ marginTop: 12 }}>
        <div className="grid cols-3">
          {nodes.slice(0, 30).map((n) => (
            <label key={n.id} className="card" style={{ boxShadow: 'none', borderStyle: 'dashed' }}>
              <input type="checkbox" checked={selected.includes(n.id)} onChange={() => toggle(n.id)} />
              <div style={{ marginTop: 8, fontWeight: 700 }}>{n.title}</div>
              <div className="muted" style={{ fontSize: 13 }}>{n.summary}</div>
            </label>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="section-title">导出 Markdown</div>
        <textarea style={{ width: '100%', minHeight: 160, border: '1px solid var(--border)', borderRadius: 12, padding: 12 }} readOnly value={markdown || '（选择后自动生成）'} />
      </div>
    </div>
  );
}
