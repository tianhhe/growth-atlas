export default function ProcessFlow({ steps, title }) {
  return (
    <div className="card">
      <div className="section-title">{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {steps.map((s, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={circle}>{idx + 1}</div>
            <div>
              <div style={{ fontWeight: 700 }}>{s.title}</div>
              <div className="muted" style={{ fontSize: 13 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const circle = {
  width: 32,
  height: 32,
  borderRadius: 16,
  background: 'var(--primary-soft)',
  display: 'grid',
  placeItems: 'center',
  color: '#312e81',
  fontWeight: 800
};
