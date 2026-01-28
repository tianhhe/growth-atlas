import { loadKnowledge } from '../../../lib/data';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from 'next/link';
import PillOverflow from '../../../components/PillOverflow';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const hubs = loadKnowledge().filter((n) => n.type === 'hub');
  return hubs.map((h) => ({ hubId: h.id }));
}

export default function HubPage({ params }) {
  const knowledge = loadKnowledge();
  const hub = knowledge.find((n) => n.id === params.hubId);
  if (!hub) return <div className="max card">未找到 Hub</div>;
  const clusters = hub.children_ids.map((cid) => knowledge.find((n) => n.id === cid)).filter(Boolean);
  const questions = [
    '这个领域的关键约束是什么？',
    '有哪些可复用的打法/框架？',
    '应该先读哪个模块？'
  ].slice(0, 3 + Math.max(0, 6 - clusters.length));

  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: 'Atlas', href: '/atlas' }, { label: hub.title }]} />
      <div className="section-title">{hub.title}</div>
      <div className="subtitle">{hub.summary}</div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="subtitle">关键问题</div>
        <ul className="list">
          {questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      <div className="grid cols-3" style={{ marginTop: 12 }}>
        {clusters.map((c) => (
          <div key={c.id} className="card">
            <div className="pill">Cluster</div>
            <h3 style={{ margin: '10px 0 6px' }}>{c.title}</h3>
            <p className="muted" style={{ minHeight: 36 }}>{c.summary || '模块目录'}</p>
            <PillOverflow items={c.tags || []} />
            <Link href={`/cluster/${c.id}`} className="button" style={{ marginTop: 10 }}>进入模块</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
