// React
import React from 'react';

// Children
import Table from './components/Table';
import SearchForm from './components/SearchForm';
import FilterList from './components/FilterList';

// Context
import PlanetsProvider from './context/Planets';

// Styles
import './styles/index.css';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <SearchForm />
        <FilterList />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
