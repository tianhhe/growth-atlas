import { loadKnowledge } from '../../lib/data';
import Breadcrumbs from '../../components/Breadcrumbs';
import WorkbenchClient from '../../components/WorkbenchClient';

export const dynamic = 'force-static';

export default function WorkbenchPage() {
  const nodes = loadKnowledge().filter((n) => ['hub','cluster','concept','method','case'].includes(n.type));
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '作战手册' }]} />
      <div className="section-title">Workbench 作战手册</div>
      <div className="subtitle">勾选 Hub / Cluster / 条目，拼成你的 Markdown 手册。</div>
      <WorkbenchClient nodes={nodes} />
    </div>
  );
}
