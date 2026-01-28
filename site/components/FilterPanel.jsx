'use client';
import { useState, useEffect } from 'react';

export default function FilterPanel({ taxonomy, onChange }) {
  const [selected, setSelected] = useState({ stage: [], channel: [], type: [], tags: [] });

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  const toggle = (key, value) => {
    setSelected((prev) => {
      const exists = prev[key].includes(value);
      const nextList = exists ? prev[key].filter((v) => v !== value) : [...prev[key], value];
      return { ...prev, [key]: nextList };
    });
  };

  const renderChips = (key, list) => (
    <div className="chips">
      {list.map((v) => (
        <button
          key={v}
          className={`button ghost`}
          style={{
            padding: '6px 10px',
            borderRadius: 999,
            borderColor: selected[key].includes(v) ? 'var(--primary)' : 'var(--border)',
            color: selected[key].includes(v) ? 'var(--primary)' : 'var(--muted)',
            background: selected[key].includes(v) ? 'var(--primary-soft)' : '#fff'
          }}
          onClick={() => toggle(key, v)}
        >
          {v}
        </button>
      ))}
    </div>
  );

  return (
    <div className="card">
      <div className="section-title">筛选</div>
      <div style={{ marginBottom: 12, fontWeight: 700 }}>阶段 Stage</div>
      {renderChips('stage', taxonomy.stage)}
      <div style={{ margin: '16px 0 12px', fontWeight: 700 }}>渠道 Channel</div>
      {renderChips('channel', taxonomy.channel)}
      <div style={{ margin: '16px 0 12px', fontWeight: 700 }}>类型 Type</div>
      {renderChips('type', taxonomy.type)}
      <div style={{ margin: '16px 0 12px', fontWeight: 700 }}>标签 Tags (Top)</div>
      {renderChips('tags', Object.keys(taxonomy.tags || {}).slice(0, 20))}
    </div>
  );
}
