import { loadKnowledge } from '../../lib/data';
import GraphViz from '../../components/GraphViz';
import Breadcrumbs from '../../components/Breadcrumbs';

export const dynamic = 'force-static';

export default function GraphPage() {
  const knowledge = loadKnowledge();
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '关系图' }]} />
      <div className="section-title">关系图 · 探索视图</div>
      <div className="subtitle">点击节点跳转详情，颜色区分类型。</div>
      <GraphViz data={knowledge} />
    </div>
  );
}
