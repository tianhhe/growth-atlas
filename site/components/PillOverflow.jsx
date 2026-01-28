'use client';
export default function PillOverflow({ items = [], limit = 3 }) {
  const shown = items.slice(0, limit);
  const more = items.length - shown.length;
  return (
    <div className="chips">
      {shown.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
      {more > 0 && <span className="tag more">+{more}</span>}
    </div>
  );
}
