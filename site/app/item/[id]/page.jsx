import { loadKnowledge } from '../../../lib/data';
import Breadcrumbs from '../../../components/Breadcrumbs';
import PillOverflow from '../../../components/PillOverflow';
import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const items = loadKnowledge().filter((n) => !['hub','cluster','proof'].includes(n.type));
  return items.map((i) => ({ id: i.id }));
}

export default function ItemPage({ params }) {
  const knowledge = loadKnowledge();
  const item = knowledge.find((n) => n.id === params.id);
  if (!item) return <div className="max card">未找到条目</div>;
  const parentCluster = knowledge.find((n) => n.children_ids?.includes(item.id) && n.type === 'cluster');
  const related = (item.related_ids || []).map((id) => knowledge.find((n) => n.id === id)).filter(Boolean);
  const subcards = [
    { key: 'playbook', title: '步骤与清单', desc: '执行要点与顺序' },
    { key: 'metrics', title: '指标与判断', desc: '衡量成效的指标树' },
    { key: 'pitfalls', title: '误区与反例', desc: '常见踩坑与反案例' },
    { key: 'proof', title: '证据', desc: '来自原文的可追溯引用' }
  ];

  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, parentCluster ? { label: parentCluster.title, href: `/cluster/${parentCluster.id}` } : null, { label: item.title }].filter(Boolean)} />
      <div className="section-title">{item.title}</div>
      <div className="subtitle">{item.summary}</div>
      <PillOverflow items={item.tags || []} />

      <div className="card" style={{ marginTop: 12 }}>
        <div className="subtitle">TL;DR</div>
        <p style={{ margin: 0 }}>{(item.body || '').split('\\n')[0].slice(0, 220)}</p>
      </div>

      <div className="grid cols-4" style={{ marginTop: 12 }}>
        {subcards.map((c) => (
          <div key={c.key} className="card">
            <div className="pill">{c.title}</div>
            <p className="muted" style={{ minHeight: 40 }}>{c.desc}</p>
            <Link href={`/item/${item.id}/${c.key}`} className="button">进入</Link>
          </div>
        ))}
      </div>

      {related.length > 0 && (
        <div className="card" style={{ marginTop: 12 }}>
          <div className="subtitle">相关节点</div>
          <div className="chips">
            {related.map((r) => (
              <Link key={r.id} href={r.type === 'proof' ? `/proof/${r.id}` : `/item/${r.id}`} className="tag">{r.title}</Link>
            ))}
          </div>
        </div>
      )}

      {parentCluster && <Link className="button flat" href={`/cluster/${parentCluster.id}`} style={{ marginTop: 12 }}>返回模块</Link>}
    </div>
  );
}
