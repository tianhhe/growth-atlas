import Link from 'next/link';

export default function CitationList({ sources = [], related = [] }) {
  return (
    <div className="card">
      <div className="section-title">来源与证据</div>
      <details className="accordion" open>
        <summary>查看引用（{sources.length}）</summary>
        <ul className="list">
          {sources.map((s, i) => (
            <li key={i}>
              <div style={{ fontWeight: 700 }}>{s.file_name}</div>
              <div className="muted" style={{ fontSize: 13 }}>{s.section_heading} · {s.locator}</div>
              <div style={{ fontSize: 13 }}>{s.excerpt}</div>
            </li>
          ))}
        </ul>
      </details>
      {related.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div className="subtitle">相关条目</div>
          <div className="chips">
            {related.map((r) => (
              <Link key={r.id} href={`/item/${r.id}`} className="tag">{r.title}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
