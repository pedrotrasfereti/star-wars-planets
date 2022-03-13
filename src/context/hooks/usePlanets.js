// React
import { useContext } from 'react';

// Context
import { Planets } from '../Planets';

const usePlanets = () => {
  const {
    data,
    filters,
    setFilters,
  } = useContext(Planets);

  return {
    data,
    filters,
    setFilters,
  };
};

export default usePlanets;
