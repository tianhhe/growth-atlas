'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { key: 'playbook', label: '步骤' },
  { key: 'metrics', label: '指标' },
  { key: 'pitfalls', label: '误区' },
  { key: 'proof', label: '证据' }
];

export default function ItemSubnav({ id }) {
  const pathname = usePathname();
  return (
    <div className="tabs" style={{ margin: '12px 0 16px' }}>
      {tabs.map((t) => {
        const href = `/item/${id}/${t.key}`;
        const active = pathname === href;
        return (
          <Link key={t.key} href={href} className={active ? 'active' : ''}>
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
