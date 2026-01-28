import { loadKnowledge } from '../../../lib/data';
import Breadcrumbs from '../../../components/Breadcrumbs';
import ClusterStructure from '../../../components/ClusterStructure';
import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const clusters = loadKnowledge().filter((n) => n.type === 'cluster');
  return clusters.map((c) => ({ clusterId: c.id }));
}

export default function ClusterPage({ params }) {
  const knowledge = loadKnowledge();
  const cluster = knowledge.find((n) => n.id === params.clusterId);
  if (!cluster) return <div className="max card">未找到模块</div>;
  const items = cluster.children_ids.map((id) => knowledge.find((n) => n.id === id)).filter(Boolean);
  const reading = items.slice(0, 5).map((i) => i.title);
  const pitfalls = (cluster.pitfalls && cluster.pitfalls.length ? cluster.pitfalls : ['忽视本模块的关键假设','信息过载未分层','缺少证据支撑']).slice(0,5);

  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: 'Atlas', href: '/atlas' }, { label: cluster.title }]} />
      <div className="section-title">{cluster.title}</div>
      <div className="subtitle">本模块结构与阅读顺序。</div>

      <div className="grid cols-3" style={{ marginTop: 12 }}>
        <ClusterStructure nodes={items} />
        <div className="card">
          <div className="section-title">阅读顺序</div>
          <ol style={{ paddingLeft: 18, margin: 0 }}>
            {reading.map((r, i) => <li key={i} style={{ marginBottom: 8 }}>{r}</li>)}
          </ol>
        </div>
        <div className="card callout">
          <div className="section-title">常见误区</div>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {pitfalls.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link className="button flat" href={`/hub/${(cluster.related_ids||[])[0] || ''}`}>返回上一级</Link>
      </div>
    </div>
  );
}
