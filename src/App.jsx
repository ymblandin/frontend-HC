import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddFood from './pages/AddFood';
import Fridge from './pages/Fridge';
import NavBar from './components/NavBar';
import FridgeContextProvider from './contexts/FridgeContext';

function App() {
  return (
    <FridgeContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Fridge />}></Route>
          <Route path='/addfood' element={<AddFood />}></Route>
        </Routes>
      </BrowserRouter>
    </FridgeContextProvider>
  );
}

export default App;
