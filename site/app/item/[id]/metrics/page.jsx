import { loadKnowledge } from '../../../../lib/data';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import ItemSubnav from '../../../../components/ItemSubnav';
import PillOverflow from '../../../../components/PillOverflow';
import FunnelChart from '../../../../components/FunnelChart';
import ComparisonMatrix from '../../../../components/ComparisonMatrix';
import OnPage from '../../../../components/OnPage';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const items = loadKnowledge().filter((n) => !['hub','cluster','proof'].includes(n.type));
  return items.map((i) => ({ id: i.id }));
}

export default function MetricsPage({ params }) {
  const knowledge = loadKnowledge();
  const item = knowledge.find((n) => n.id === params.id);
  const parentCluster = knowledge.find((n) => n.children_ids?.includes(item?.id));
  if (!item) return <div className="max card">未找到</div>;
  const matrixData = { Core: {}, };
  (item.metrics || []).forEach((m) => { matrixData.Core[m] = '关注提升'; });

  return (
    <div className="max fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 16 }}>
      <div>
        <Breadcrumbs items={[{ label: '首页', href: '/home' }, parentCluster ? { label: parentCluster.title, href: `/cluster/${parentCluster.id}` } : null, { label: item.title, href: `/item/${item.id}` }, { label: '指标' }].filter(Boolean)} />
        <div className="section-title">{item.title} · 指标</div>
        <PillOverflow items={item.tags || []} />
        <ItemSubnav id={item.id} />

        <div className="grid cols-3" style={{ marginTop: 12 }}>
          <div className="card">
            <div className="subtitle">关键指标</div>
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {(item.metrics.length ? item.metrics : ['待补充']).map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          <FunnelChart data={[item]} />
          <ComparisonMatrix rows={['核心']} cols={item.metrics.length ? item.metrics : ['指标']} data={matrixData} title="指标对照" />
        </div>
      </div>
      <OnPage items={[{ href: '#', label: '关键指标' }, { href: '#', label: '漏斗/矩阵' }]} />
    </div>
  );
}
