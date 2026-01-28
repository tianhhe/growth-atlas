import { loadKnowledge } from '../../../lib/data';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CitationList from '../../../components/CitationList';
import Link from 'next/link';

export const dynamic = 'force-static';

export function generateStaticParams() {
  const proofs = loadKnowledge().filter((n) => n.type === 'proof');
  return proofs.map((p) => ({ proofId: p.id }));
}

export default function ProofPage({ params }) {
  const knowledge = loadKnowledge();
  const proof = knowledge.find((n) => n.id === params.proofId);
  if (!proof) return <div className="max card">未找到证据</div>;
  const supported = (proof.related_ids || []).map((id) => knowledge.find((n) => n.id === id)).filter(Boolean);
  return (
    <div className="max fade-in">
      <Breadcrumbs items={[{ label: '首页', href: '/home' }, { label: '证据' }]} />
      <div className="section-title">证据 · {proof.title}</div>
      <div className="subtitle">{proof.summary}</div>
      <CitationList sources={proof.sources} related={supported} />
      <div style={{ marginTop: 12 }}>
        {supported.map((s) => <Link key={s.id} href={`/item/${s.id}`} className="tag">{s.title}</Link>)}
      </div>
    </div>
  );
}
