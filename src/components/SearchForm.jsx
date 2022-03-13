// React
import React from 'react';

// Children
import NameInput from './NameInput';
import NumericInputs from './NumericInputs';

const SearchForm = () => {
  console.log();
  return (
    <div>
      <NameInput />
      <br />
      <NumericInputs />
    </div>
  );
};

export default SearchForm;
