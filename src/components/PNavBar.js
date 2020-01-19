import React, { useContext } from 'react';
import { PBookContext } from '../context/PBookContext'

const PNavBar = () => {
  const { books } = useContext(PBookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>{books.length}</p>
    </div>
  )
}

export default PNavBar;