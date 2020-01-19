import React, { useContext } from 'react';
import { PBookContext } from '../context/PBookContext';
import PBookDetails from '../components/PBookDetails';

const PBookList = () => {
  const { books } =  useContext(PBookContext);

  if(books.length > 0) {
    return (
      <div className="book-list">
        <ul>
          {books.map(book => {
            return <PBookDetails key={book.id} book={book}/>
          })}
        </ul>
      </div>
    )
  }

  return <div className="empty">No books to read</div>;
}

export default PBookList;