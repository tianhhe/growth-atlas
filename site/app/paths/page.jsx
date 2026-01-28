import { loadPaths } from '../../lib/data';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function PathsPage() {
  const paths = loadPaths();
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '路径' }]} />
      <div className="section-title">策略路径</div>
      <div className="subtitle">每条路径分步推进，点击展开或进入详情。</div>
      <div className="grid cols-3">
        {paths.map((p) => (
          <div key={p.id} className="card">
            <div className="pill">Path</div>
            <h3 style={{ margin: '8px 0' }}>{p.title}</h3>
            <p className="muted" style={{ minHeight: 40 }}>{p.summary}</p>
            <Link className="button" href={`/path/${p.id}`}>查看步骤</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
