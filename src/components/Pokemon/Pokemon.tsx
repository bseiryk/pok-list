import React from 'react';

import './styles.css';

export const Pokemon = ({
  data,
  onSelect,
}: {
  data: { name: string; selected: boolean | null };
  onSelect: () => void;
}) => {
  return (
    <div className="pokemon-card">
      <input
        id={data.name}
        type="checkbox"
        defaultChecked={!!data.selected}
        onChange={() => onSelect()}
      />
      <label htmlFor={data.name} className="pokemon-card--label">
        {data.name}
      </label>
    </div>
  );
};
