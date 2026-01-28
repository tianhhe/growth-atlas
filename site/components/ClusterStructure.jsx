import Link from 'next/link';

export default function ClusterStructure({ nodes = [] }) {
  return (
    <div className="card">
      <div className="section-title">模块结构</div>
      <ul className="list">
        {nodes.map((n) => (
          <li key={n.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{n.title}</span>
              <Link className="button flat" href={`/item/${n.id}`}>进入</Link>
            </div>
            <div className="muted" style={{ fontSize: 13 }}>{n.summary?.slice(0, 80) || ''}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
