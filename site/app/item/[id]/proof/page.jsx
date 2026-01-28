import { loadKnowledge } from '../../../../lib/data';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ItemSubnav from '../../../../components/ItemSubnav';
import CitationList from '../../../../components/CitationList';
import OnPage from '../../../../components/OnPage';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const items = loadKnowledge().filter((n) => !['hub','cluster','proof'].includes(n.type));
  return items.map((i) => ({ id: i.id }));
}

export default function ItemProofPage({ params }) {
  const knowledge = loadKnowledge();
  const item = knowledge.find((n) => n.id === params.id);
  const parentCluster = knowledge.find((n) => n.children_ids?.includes(item?.id));
  if (!item) return <div className="max card">未找到</div>;
  const proofs = (item.related_ids || []).map((id) => knowledge.find((n) => n.id === id && n.type === 'proof')).filter(Boolean);

  return (
    <div className="max fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 16 }}>
      <div>
        <Breadcrumbs items={[{ label: '首页', href: '/home' }, parentCluster ? { label: parentCluster.title, href: `/cluster/${parentCluster.id}` } : null, { label: item.title, href: `/item/${item.id}` }, { label: '证据' }].filter(Boolean)} />
        <div className="section-title">{item.title} · 证据</div>
        <ItemSubnav id={item.id} />
        {proofs.length === 0 ? <div className="card">暂无证据节点，可补充。</div> : proofs.map((p) => (
          <CitationList key={p.id} sources={p.sources} related={[]} />
        ))}
      </div>
      <OnPage items={[{ href: '#', label: '引用' }]} />
    </div>
  );
}
