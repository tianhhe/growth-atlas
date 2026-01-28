import { loadPaths, loadKnowledge } from '../../../lib/data';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return loadPaths().map((p) => ({ pathId: p.id }));
}

export default function PathDetail({ params }) {
  const paths = loadPaths();
  const knowledge = loadKnowledge();
  const path = paths.find((p) => p.id === params.pathId);
  if (!path) return <div className="max card">未找到路径</div>;
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '路径', href: '/paths' }, { label: path.title }]} />
      <div className="section-title">{path.title}</div>
      <div className="subtitle">{path.summary}</div>
      <div className="card">
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          {path.steps.map((s, i) => {
            const ref = s.ref ? knowledge.find((n) => n.id === s.ref) : null;
            return (
              <li key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700 }}>{s.title}</div>
                <div className="muted" style={{ fontSize: 13 }}>{s.note}</div>
                {ref && <Link href={`/item/${ref.id}`} className="tag" style={{ marginTop: 6, display: 'inline-block' }}>{ref.title}</Link>}
              </li>
            );
          })}
        </ol>
      </div>
      <div style={{ marginTop: 12 }}>
        <Link className="button flat" href="/paths">返回路径列表</Link>
      </div>
    </div>
  );
}
