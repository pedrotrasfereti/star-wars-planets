// React
import React, { useState, useEffect } from 'react';

// Hooks
import usePlanets from '../context/hooks/usePlanets';

const TableBody = () => {
  const { data } = usePlanets(); // Inicia como um array vazio

  const [planets, setPlanets] = useState([]); // Inicia como um array vazio

  /*
  Colocar todos os planetas no estado */
  const callback = () => {
    if (data.length) {
      setPlanets(data);
    }
  };

  /*
  Dependências: "data" - Esperar o data ser preenchido com informações
  antes de chamar a callback */
  useEffect(callback, [data]);

  // Cria texto para cada item em um array
  const createText = (arrayOfValues) => (
    arrayOfValues.map((value) => value)
  );

  // Cria células da tabela
  const createCells = (planet) => {
    const values = Object.values(planet);
    return values.map((value, i) => (
      <td key={ i }>{ typeof value === 'string' ? value : createText(value) }</td>
    ));
  };

  // Cria fileiras de células da tabela
  const createRows = () => planets.map((planet, i) => (
    <tr key={ i }>
      { createCells(planet) }
    </tr>
  ));

  return (
    <tbody>
      {
        data.length ? createRows() : <tr><td>Loading...</td></tr>
      }
    </tbody>
  );
};
export default TableBody;
