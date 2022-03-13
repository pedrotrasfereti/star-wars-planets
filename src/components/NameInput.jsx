// React
import React from 'react';

// Context
import usePlanets from '../context/hooks/usePlanets';

const NameInput = () => {
  const { filters, setFilters } = usePlanets();

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters, // Other filters
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      type="text"
      onChange={ (evt) => handleChange(evt) }
      data-testid="name-filter"
    />
  );
};

export default NameInput;
