// React
import React, { Fragment } from 'react';

// Context
import usePlanets from '../context/hooks/usePlanets';

const FilterList = () => {
  const { filters, setFilters } = usePlanets();

  const deleteFilter = ({ target: { id } }) => {
    /* Remover filtro de filters */
    setFilters({
      ...filters, // Other filters
      filterByNumericValues: [
        ...filters.filterByNumericValues
          .filter((_numFilter, i, array) => array[i] !== array[id]), // _: unused param
      ],
    });

    /* Recolocar opção no select de colunas */
    const columnSelect = document.getElementById('column');
    const optionAppend = document.createElement('option');
    const { column } = filters.filterByNumericValues[id];

    // Características do elemento
    optionAppend.attributes.name = 'col';
    optionAppend.attributes.value = column;
    optionAppend.innerText = column;

    columnSelect.appendChild(optionAppend);
  };

  return (
    <ol id="filter-list">
      {
        filters.filterByNumericValues.length ? (
          filters.filterByNumericValues.map(({ column, comparison, value }, i) => (
            <Fragment key={ i }>
              <li>{`${column} ${comparison} ${value}`}</li>
              <button
                type="button"
                id={ i }
                onClick={ (evt) => deleteFilter(evt) }
              >
                X
              </button>
            </Fragment>
          ))
        ) : (
          <li>When you add a new filter it will show up here...</li>
        )
      }
    </ol>
  );
};

export default FilterList;
