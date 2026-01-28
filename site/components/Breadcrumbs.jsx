import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="breadcrumb">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span className="muted">{item.label}</span>}
          {idx < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  );
}
