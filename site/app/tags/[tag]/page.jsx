import { loadKnowledge } from '../../../lib/data';
import ItemCard from '../../../components/ItemCard';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const tags = new Set();
  loadKnowledge().forEach((n) => (n.tags || []).forEach((t) => tags.add(t)));
  return Array.from(tags).slice(0, 80).map((t) => ({ tag: t }));
}

export default function TagPage({ params }) {
  const knowledge = loadKnowledge();
  const list = knowledge.filter((k) => (k.tags || []).includes(params.tag));
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '标签', href: '/atlas' }, { label: params.tag }]} />
      <div className="section-title">标签：{params.tag}</div>
      <div className="muted">共 {list.length} 条</div>
      <div className="grid cols-3" style={{ marginTop: 12 }}>
        {list.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
