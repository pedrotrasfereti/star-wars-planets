// React
import React, { useState } from 'react';

// Hooks
import usePlanets from '../context/hooks/usePlanets';

const NumericInputs = () => {
  const {
    filters,
    setFilters,
  } = usePlanets();

  const defaultFilter = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const [filter, setFilter] = useState(defaultFilter); // Objeto de filtro
  console.log(filter);

  /* Criar um novo objeto de filtro */
  const handleChange = ({ target: { id, value } }) => {
    setFilter({
      ...filter,
      [id]: value,
    });
  };

  /*
    Redefinir o campo de coluna do objeto de filtro.
    Obs: Isso é necessário pois apesar do "option" ser deletado
    quando o novo filtro for adicionado, o objeto de filtro continua
    com os valores anteriores.
  */
  const resetColSelect = () => {
    const currentValue = document.getElementById('column').value;

    setFilter((prev) => ({
      ...prev,
      column: currentValue,
    }));
  };

  /* Salvar novo objeto de filtro em filters */
  const handleClick = () => {
    // Push new object into the filters array
    setFilters({
      ...filters, // Other filters
      filterByNumericValues: [
        ...filters.filterByNumericValues, // My previous filter objects
        filter, // My current filter object
      ],
    });

    const interval = 0; // "Async" function
    setTimeout(() => resetColSelect(), interval);
  };

  return (
    <>
      {/* Propriedade numérica a ser comparada */}
      <select
        id="column"
        data-testid="column-filter"
        onChange={ (evt) => handleChange(evt) }
      >
        <option name="col" value="population">population</option>
        <option name="col" value="orbital_period">orbital_period</option>
        <option name="col" value="diameter">diameter</option>
        <option name="col" value="rotation_period">rotation_period</option>
        <option name="col" value="surface_water">surface_water</option>
      </select>
      {/* Operador de comparação */}
      <select
        id="comparison"
        data-testid="comparison-filter"
        defaultValue="maior que"
        onChange={ (evt) => handleChange(evt) }
      >
        <option name="compare" value="maior que">maior que</option>
        <option name="compare" value="menor que">menor que</option>
        <option name="compare" value="igual a">igual a</option>
      </select>
      {/* Valor numérico */}
      <input
        type="number"
        name="value"
        id="value"
        data-testid="value-filter"
        min="0"
        defaultValue="0"
        onChange={ (evt) => handleChange(evt) }
      />
      {/* Adicionar filtro de comparação */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Add Filter
      </button>
    </>
  );
};

export default NumericInputs;
