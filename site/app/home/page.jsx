import Link from 'next/link';
import { loadKnowledge } from '../../lib/data';
import CardGrid from '../../components/CardGrid';
import PillOverflow from '../../components/PillOverflow';

export const dynamic = 'force-static';

export default function Home() {
  const hubs = loadKnowledge().filter((n) => n.type === 'hub').slice(0, 6);
  return (
    <div>
      <section className="max card fade-in">
        <div className="section-title" style={{ fontSize: 28 }}>增长知识图谱</div>
        <div className="subtitle">从宏观地图到证据层，层层深入且不过载。</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
          <Link className="button" href="/atlas">进入地图</Link>
          <Link className="button ghost" href="/paths">查看路径</Link>
          <Link className="button ghost" href="/graph">关系图</Link>
          <Link className="button flat" href="/workbench">作战手册</Link>
        </div>
      </section>

      <CardGrid title="六大 Hub" subtitle="先从宏观领域开始，再逐层聚焦" columns="cols-3">
        {hubs.map((hub) => (
          <div key={hub.id} className="card">
            <div className="pill">Hub</div>
            <h3 style={{ margin: '10px 0 6px' }}>{hub.title}</h3>
            <p className="muted" style={{ minHeight: 40 }}>{hub.summary}</p>
            <PillOverflow items={hub.tags || []} />
            <Link href={`/hub/${hub.id}`} className="button" style={{ marginTop: 10 }}>进入</Link>
          </div>
        ))}
      </CardGrid>
    </div>
  );
}
