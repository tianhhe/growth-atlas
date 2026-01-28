export default function ComparisonMatrix({ rows, cols, data, title }) {
  return (
    <div className="card">
      <div className="section-title">{title}</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={cellStyle}>渠道/指标</th>
              {cols.map((c) => (
                <th key={c} style={cellStyle}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r}>
                <td style={cellStyle}>{r}</td>
                {cols.map((c) => (
                  <td key={c} style={cellStyle}>{data?.[r]?.[c] || '—'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cellStyle = {
  border: '1px solid #e5e7eb',
  padding: '10px 12px',
  fontSize: 13,
  textAlign: 'left'
};
