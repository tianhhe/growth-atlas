import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="max site-header-inner">
        <div className="logo">Growth Atlas</div>
        <nav className="top-nav">
          <Link href="/home">首页</Link>
          <Link href="/atlas">地图</Link>
          <Link href="/paths">路径</Link>
          <Link href="/graph">关系图</Link>
          <Link href="/workbench">作战手册</Link>
        </nav>
      </div>
    </header>
  );
}
