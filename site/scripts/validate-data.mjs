import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'site', 'data');
const knowledge = JSON.parse(fs.readFileSync(path.join(dataDir, 'knowledge.json'), 'utf-8'));
const ids = new Set();
let ok = true;

for (const item of knowledge) {
  if (!item.id || ids.has(item.id)) {
    console.error('重复或空 id', item.id);
    ok = false;
  }
  ids.add(item.id);
  const required = ['id','type','title','summary','body','tags','stage','channel','metrics','playbook_steps','pitfalls','related_ids','children_ids','sources'];
  required.forEach((key) => {
    if (item[key] === undefined) {
      console.error(`缺少字段 ${key} in ${item.id}`);
      ok = false;
    }
  });
}

// 断链检查
for (const item of knowledge) {
  item.related_ids.forEach((rid) => {
    if (!ids.has(rid)) {
      console.error(`related_ids 断链: ${item.id} -> ${rid}`);
      ok = false;
    }
  });
  (item.children_ids || []).forEach((cid) => {
    if (!ids.has(cid)) {
      console.error(`children_ids 断链: ${item.id} -> ${cid}`);
      ok = false;
    }
  });
  if (item.type === 'hub' && (!item.children_ids || item.children_ids.length === 0)) {
    console.error(`hub 缺少 children: ${item.id}`);
    ok = false;
  }
}

if (ok) {
  console.log('knowledge.json 校验通过，共', knowledge.length, '条');
  process.exit(0);
} else {
  process.exit(1);
}
