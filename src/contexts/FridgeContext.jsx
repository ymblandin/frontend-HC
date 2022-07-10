import { createContext } from 'react';

export const FridgeContext = createContext(null);

import React, { useState } from 'react';
import data from '../MOCK_DATA.json';

function FridgeContextProvider({ children }) {
  const [fridge, setFridge] = useState(data);
  const [query, setQuery] = useState('');

  return (
    <FridgeContext.Provider
      value={{
        fridge: fridge,
        setFridge: setFridge,
        query: query,
        setQuery: setQuery,
      }}
    >
      {children}
    </FridgeContext.Provider>
  );
}

export default FridgeContextProvider;
