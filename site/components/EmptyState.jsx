import Image from 'next/image';

export default function EmptyState({ title = '暂无内容', desc = '稍后再试或调整筛选', cta }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: 12 }}>
        <Image src="/illustrations/placeholder-hero.svg" alt="empty" width={260} height={80} />
      </div>
      <div className="section-title" style={{ marginBottom: 6 }}>{title}</div>
      <div className="muted">{desc}</div>
      {cta}
    </div>
  );
}
