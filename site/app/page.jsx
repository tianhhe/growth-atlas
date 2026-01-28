import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-static';

export default function Intro() {
  return (
    <div className="max fade-in" style={{ minHeight: '70vh', display: 'grid', alignItems: 'center', gap: 24 }}>
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <div style={{ fontFamily: '"Caveat","Pacifico","Playfair Display","Times New Roman",cursive,serif', fontSize: 48, letterSpacing: -1, lineHeight: 1 }}>
          hi, i’m neal
        </div>
        <p className="subtitle" style={{ fontSize: 18, maxWidth: 640, margin: '12px auto 8px' }}>
          我整理了各行业的运营、增长案例与理论知识，搭建了这个层层深入的网站，希望能帮到你，有所收获。
        </p>
        <div style={{ fontSize: 20, marginBottom: 10 }}>👇</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 6 }}>
          <Link className="button" href="/home">开始</Link>
        </div>
      </div>
      <div className="grid cols-3" style={{ alignItems: 'center' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/placeholder-hero.svg" alt="illustration" width={280} height={110} />
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/flow-branches.svg" alt="illustration" width={280} height={110} />
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/stacked-cards.svg" alt="illustration" width={280} height={110} />
        </div>
      </div>
    </div>
  );
}
