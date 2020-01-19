import React, { useContext } from 'react';
import { PBookContext } from '../context/PBookContext';

const PBookDetails = ({book}) => {
  const { removeBook } = useContext(PBookContext);

  const { title, author, id } = book;

  return (
    <li >
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <button onClick={() => removeBook(id)}>Remove {title}</button>
    </li>
  )
};

export default PBookDetails;