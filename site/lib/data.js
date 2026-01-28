import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function loadKnowledge() {
  const raw = fs.readFileSync(path.join(dataDir, 'knowledge.json'), 'utf-8');
  return JSON.parse(raw);
}

export function loadTaxonomy() {
  const raw = fs.readFileSync(path.join(dataDir, 'taxonomy.json'), 'utf-8');
  return JSON.parse(raw);
}

export function loadPaths() {
  const raw = fs.readFileSync(path.join(dataDir, 'paths.json'), 'utf-8');
  return JSON.parse(raw);
}

export function findItem(id) {
  return loadKnowledge().find((n) => n.id === id);
}
