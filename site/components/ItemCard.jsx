import Link from 'next/link';

export default function ItemCard({ item }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="pill">{item.type}</span>
        <span className="muted" style={{ fontSize: 12 }}>{item.stage.join(' / ')}</span>
      </div>
      <h3 style={{ margin: '10px 0 6px' }}>{item.title}</h3>
      <p className="muted" style={{ minHeight: 48 }}>{item.summary}</p>
      <div className="chips">
        {item.tags.slice(0, 4).map((t) => (
          <Link key={t} href={`/tags/${encodeURIComponent(t)}`} className="tag">{t}</Link>
        ))}
      </div>
      <Link href={`/item/${item.id}`} className="button" style={{ marginTop: 12, display: 'inline-flex' }}>查看详情</Link>
    </div>
  );
}
