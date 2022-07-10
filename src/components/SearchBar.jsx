import React from 'react';
import { useContext } from 'react';
import { FridgeContext } from '../contexts/FridgeContext';

function SearchBar() {
  const { query, setQuery } = useContext(FridgeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Chercher un aliment'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name='search'
      />
      <button type='submit'>Chercher</button>
    </form>
  );
}

export default SearchBar;
