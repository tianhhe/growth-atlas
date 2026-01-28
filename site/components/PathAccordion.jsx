'use client';
import { useState } from 'react';
import CopyButton from './CopyButton';
import Link from 'next/link';

export default function PathAccordion({ paths }) {
  return (
    <div className="grid cols-3">
      {paths.map((p) => (
        <PathCard key={p.id} path={p} />
      ))}
    </div>
  );
}

function PathCard({ path }) {
  const [open, setOpen] = useState(false);
  const md = `# ${path.title}\n\n${path.summary}\n\n${path.steps
    .map((s, i) => `${i + 1}. ${s.title} (${s.ref ? `/item/${s.ref}` : ''})`)
    .join('\n')}`;
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{path.title}</h3>
        <button className="button ghost" onClick={() => setOpen(!open)}>
          {open ? '收起' : '展开'}
        </button>
      </div>
      <p className="muted">{path.summary}</p>
      {open && (
        <div>
          <ol>
            {path.steps.map((s, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                <strong>{s.title}</strong>{' '}
                {s.ref && <Link href={`/item/${s.ref}`} style={{ color: 'var(--primary)' }}>查看条目</Link>}
                <div className="muted" style={{ fontSize: 13 }}>{s.note}</div>
              </li>
            ))}
          </ol>
          <CopyButton text={md} label="复制路径 Markdown" />
        </div>
      )}
    </div>
  );
}
