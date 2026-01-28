import { loadKnowledge, loadTaxonomy } from '../../lib/data';
import LibraryClient from '../../components/LibraryClient';

export default function LibraryPage() {
  const knowledge = loadKnowledge();
  const taxonomy = loadTaxonomy();
  return <LibraryClient knowledge={knowledge} taxonomy={taxonomy} />;
}
