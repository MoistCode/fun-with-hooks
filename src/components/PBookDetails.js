import React, { useContext } from 'react';
import { PBookContext } from '../context/PBookContext';
import { REMOVE_BOOK } from '../reducers/PBookReducer';

const PBookDetails = ({book}) => {
  const { dispatch } = useContext(PBookContext);

  const { title, author, id } = book;

  return (
    <li >
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <button onClick={() => dispatch({type: REMOVE_BOOK, id })}>Remove {title}</button>
    </li>
  )
};

export default PBookDetails;