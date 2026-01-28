import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: '增长知识图谱 | Growth Atlas',
  description: '层层深入的交互式增长知识百科'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>
        <div className="shell">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
