'use client';
import React from 'react';
import SearchBox from './SearchBox';
import FilterPanel from './FilterPanel';
import ItemCard from './ItemCard';

function filterData(data, selected) {
  return data.filter((d) => {
    const matchStage = selected.stage.length ? selected.stage.some((s) => d.stage.includes(s)) : true;
    const matchChannel = selected.channel.length ? selected.channel.some((c) => d.channel.includes(c)) : true;
    const matchType = selected.type.length ? selected.type.includes(d.type) : true;
    const matchTag = selected.tags.length ? selected.tags.some((t) => d.tags.includes(t)) : true;
    return matchStage && matchChannel && matchType && matchTag;
  });
}

export default function LibraryClient({ knowledge, taxonomy }) {
  const [filtered, setFiltered] = React.useState(knowledge);
  const [searchBase, setSearchBase] = React.useState(knowledge);

  return (
    <div className="grid" style={{ gridTemplateColumns: '280px 1fr', gap: 16 }}>
      <FilterPanel
        taxonomy={taxonomy}
        onChange={(sel) => {
          setFiltered(filterData(searchBase, sel));
        }}
      />
      <div className="grid cols-3">
        <SearchBox
          data={knowledge}
          onResults={(res) => {
            setSearchBase(res);
            setFiltered(res);
          }}
        />
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
