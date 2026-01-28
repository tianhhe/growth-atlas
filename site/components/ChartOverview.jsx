'use client';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ChartOverview({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = echarts.init(ref.current);
    const stageCount = {};
    data.forEach((d) => d.stage.forEach((s) => (stageCount[s] = (stageCount[s] || 0) + 1)));
    const typeCount = {};
    data.forEach((d) => (typeCount[d.type] = (typeCount[d.type] || 0) + 1));
    chart.setOption({
      tooltip: {},
      grid: { left: 12, right: 12, top: 20, bottom: 10, containLabel: true },
      xAxis: { type: 'category', data: Object.keys(stageCount) },
      yAxis: { type: 'value' },
      series: [
        { type: 'bar', data: Object.values(stageCount), name: '阶段条目数', itemStyle: { color: '#4f46e5' } },
        { type: 'line', yAxisIndex: 0, data: Object.values(stageCount), name: '趋势', smooth: true, itemStyle: { color: '#00c2a8' } }
      ],
      legend: { bottom: 0 }
    });
    return () => chart.dispose();
  }, [data]);

  return <div className="card" style={{ height: 320 }} ref={ref} />;
}
