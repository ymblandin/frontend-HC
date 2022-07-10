import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Contenu du frigo</Link>
        </li>
        <li>
          <Link to='/addfood'>Ajouter des aliments</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navBar;
