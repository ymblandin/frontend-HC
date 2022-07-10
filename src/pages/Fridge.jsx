import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { FridgeContext } from '../contexts/FridgeContext';

function Fridge() {
  const { fridge, setFridge, query } = useContext(FridgeContext);

  const handleDelete = (e) => {
    let deleted = fridge.filter((item) => item.food !== e.target.id);
    setFridge(deleted);
  };

  const handleIncrement = (e) => {
    let incremented = fridge.map((item) => {
      return item.food === e.target.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item };
    });
    setFridge(incremented);
  };

  const handleDecrement = (e) => {
    let decremented = fridge
      .filter((item) => {
        // if the quantity is 1, after the click the quantity will be 0 (thanks to the following map function), thus remove the food from the fridge
        if (item.quantity === 1) {
          return item.food !== e.target.id;
        } else {
          return item;
        }
      })
      .map((item) => {
        return item.food === e.target.id
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item };
      });
    setFridge(decremented);
  };

  return (
    <div className='Fridge'>
      <h1>Voici le contenu du frigo !</h1>
      <SearchBar />
      <br />
      <table>
        <thead>
          <tr>
            <th>Aliments</th>
            <th>Quantité</th>
            <th>Gestion</th>
          </tr>
        </thead>
        <tbody>
          {fridge
            .filter((item) => {
              if (query === '') {
                return item;
              } else {
                return item.food.toLowerCase().includes(query.toLowerCase());
              }
            })
            .map((item) => (
              <tr key={item.food}>
                <td>{item.food}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={handleDelete} id={item.food}>
                    Supprimer l'aliment
                  </button>
                  <br />{' '}
                  <button onClick={handleIncrement} id={item.food}>
                    +
                  </button>{' '}
                  <button onClick={handleDecrement} id={item.food}>
                    -
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fridge;
