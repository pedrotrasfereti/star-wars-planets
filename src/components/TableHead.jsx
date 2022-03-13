// React
import React, { useState, useEffect } from 'react';

// Hooks
import usePlanets from '../context/hooks/usePlanets';

const TableHead = () => {
  const { data } = usePlanets(); // Inicia como um array vazio

  const [cols, setCols] = useState([]); // Inicia como um array vazio

  /*
    Colocar as chaves recebidas do planeta no estado */
  const callback = () => {
    if (data.length) {
      setCols(Object.keys(data[0]));
    }
  };

  /*
    Dependências: "data" - Esperar o data ser preenchido com informações
    antes de chamar a callback */
  useEffect(callback, [data]);

  return (
    <thead>
      <tr>
        {
          data.length ? (
            cols.map((col, i) => <th key={ i }>{ col }</th>)
          ) : (
            <th>Loading...</th>
          )
        }
      </tr>
    </thead>
  );
};
export default TableHead;
