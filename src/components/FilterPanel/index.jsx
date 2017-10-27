import React from 'react';

import Filter from 'components/Filter';

function FilterPanel({ filterOptions, visibilityFilter, handleFilterChange }) {
  return (
    <div>
      <Filter
        name="type"
        label="vehicle"
        options={filterOptions.types}
        value={visibilityFilter.type}
        disabled={false}
        onChange={handleFilterChange}
      />
      <Filter
        name="brand"
        label="brand"
        options={filterOptions.brands}
        value={visibilityFilter.brand}
        disabled={visibilityFilter.type === ''}
        onChange={handleFilterChange}
      />
      <Filter
        name="color"
        label="color"
        options={filterOptions.colors}
        value={visibilityFilter.color}
        disabled={visibilityFilter.brand === ''}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default FilterPanel;
