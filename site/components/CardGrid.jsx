export default function CardGrid({ title, subtitle, children, columns = 'cols-3' }) {
  return (
    <section className="max fade-in" style={{ marginTop: 12 }}>
      {title && <div className="section-title">{title}</div>}
      {subtitle && <div className="subtitle">{subtitle}</div>}
      <div className={`grid ${columns}`}>{children}</div>
    </section>
  );
}
