import { loadKnowledge } from '../../../../lib/data';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ItemSubnav from '../../../../components/ItemSubnav';
import PillOverflow from '../../../../components/PillOverflow';
import OnPage from '../../../../components/OnPage';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const items = loadKnowledge().filter((n) => !['hub','cluster','proof'].includes(n.type));
  return items.map((i) => ({ id: i.id }));
}

export default function PitfallsPage({ params }) {
  const knowledge = loadKnowledge();
  const item = knowledge.find((n) => n.id === params.id);
  const parentCluster = knowledge.find((n) => n.children_ids?.includes(item?.id));
  if (!item) return <div className="max card">未找到</div>;
  return (
    <div className="max fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 16 }}>
      <div>
        <Breadcrumbs items={[{ label: '首页', href: '/home' }, parentCluster ? { label: parentCluster.title, href: `/cluster/${parentCluster.id}` } : null, { label: item.title, href: `/item/${item.id}` }, { label: '误区' }].filter(Boolean)} />
        <div className="section-title">{item.title} · 误区与反例</div>
        <PillOverflow items={item.tags || []} />
        <ItemSubnav id={item.id} />
        <div className="card callout">
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {(item.pitfalls.length ? item.pitfalls : ['待补充']).slice(0, 8).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
      <OnPage items={[{ href: '#', label: '误区列表' }]} />
    </div>
  );
}
