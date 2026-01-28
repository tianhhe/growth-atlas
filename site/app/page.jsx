import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-static';

export default function Intro() {
  return (
    <div className="max fade-in" style={{ minHeight: '70vh', display: 'grid', alignItems: 'center', gap: 24 }}>
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <div style={{ fontFamily: '"Playfair Display","Times New Roman",serif', fontSize: 42, letterSpacing: -0.4 }}>hi, i’m neal</div>
        <p className="subtitle" style={{ fontSize: 18, maxWidth: 640, margin: '12px auto 20px' }}>
          我整理了各行业的运营、增长案例与理论知识，搭建了这个层层深入的网站，希望能帮到你，有所收获。
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
          <Link className="button" href="/home">开始</Link>
        </div>
      </div>
      <div className="grid cols-3" style={{ alignItems: 'center' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/placeholder-hero.svg" alt="illustration" width={280} height={90} />
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/placeholder-hero.svg" alt="illustration" width={280} height={90} />
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Image src="/illustrations/placeholder-hero.svg" alt="illustration" width={280} height={90} />
        </div>
      </div>
    </div>
  );
}
