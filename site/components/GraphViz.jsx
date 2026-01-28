'use client';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
});

export default function GraphViz({ data, highlight }) {
  const graph = useMemo(() => {
    const nodes = data.map((d) => ({
      id: d.id,
      name: d.title,
      group: d.type
    }));
    const links = [];
    data.forEach((d) => {
      d.related_ids?.forEach((rid) => {
        if (data.find((x) => x.id === rid)) links.push({ source: d.id, target: rid });
      });
    });
    return { nodes, links };
  }, [data]);

  return (
    <div className="card" style={{ height: 520 }}>
      <ForceGraph2D
        graphData={graph}
        nodeLabel={(n) => n.name}
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        backgroundColor="#f8fafc"
        onNodeClick={(node) => {
          window.location.href = `/item/${node.id}`;
        }}
        nodeCanvasObject={(node, ctx, scale) => {
          const size = 6 + (highlight && highlight.includes(node.id) ? 4 : 0);
          ctx.beginPath();
          ctx.fillStyle = node.color || '#4f46e5';
          ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
          ctx.fill();
          const label = node.name;
          ctx.font = `${12 / scale}px Inter`;
          ctx.fillStyle = '#0f172a';
          ctx.fillText(label, node.x + size + 2, node.y + 4);
        }}
      />
    </div>
  );
}
