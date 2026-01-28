export default function OnPage({ items = [] }) {
  if (!items.length) return null;
  return (
    <aside className="onpage">
      <div className="subtitle">On this page</div>
      <ul className="list">
        {items.map((i) => (
          <li key={i.href}>
            <a href={i.href}>{i.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
