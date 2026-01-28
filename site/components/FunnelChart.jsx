'use client';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function FunnelChart({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = echarts.init(ref.current);
    const funnelData = ['Acquisition', 'Activation', 'Retention', 'Revenue', 'Referral'].map((stage) => ({
      name: stage,
      value: data.filter((d) => d.stage.includes(stage)).length || 1
    }));
    chart.setOption({
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'funnel',
          left: '10%',
          right: '10%',
          top: 10,
          bottom: 10,
          sort: 'descending',
          label: { position: 'inside' },
          data: funnelData
        }
      ],
      color: ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe']
    });
    return () => chart.dispose();
  }, [data]);

  return <div className="card" style={{ height: 320 }} ref={ref} />;
}
