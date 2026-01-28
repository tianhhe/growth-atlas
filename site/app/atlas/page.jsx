import CardGrid from '../../components/CardGrid';
import PillOverflow from '../../components/PillOverflow';
import { loadKnowledge } from '../../lib/data';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function AtlasPage() {
  const hubs = loadKnowledge().filter((n) => n.type === 'hub');
  return (
    <div className="max fade-in">
      <div className="section-title">Atlas · 增长领域地图</div>
      <div className="subtitle">选择一个 Hub 开始；地图仅展示标题与一句话，细节进入下一层。</div>
      <CardGrid columns="cols-3">
        {hubs.map((hub) => (
          <div key={hub.id} className="card">
            <div className="pill">Hub</div>
            <h3 style={{ margin: '8px 0' }}>{hub.title}</h3>
            <p className="muted" style={{ minHeight: 44 }}>{hub.summary}</p>
            <PillOverflow items={hub.tags || []} />
            <Link href={`/hub/${hub.id}`} className="button" style={{ marginTop: 10 }}>进入模块</Link>
          </div>
        ))}
      </CardGrid>
    </div>
  );
}
