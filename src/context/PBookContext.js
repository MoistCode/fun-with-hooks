import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const PBookContext = createContext();

export const PBookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    { title: 'The Way of Kings', author: 'cowman1', id: uuid() },
    { title: 'The Name of the Wind', author: 'cowman2', id: uuid() },
    { title: 'The Final Empire', author: 'cowman3', id: uuid() },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}])
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <PBookContext.Provider value={{books, addBook, removeBook}}>
      {children}
    </PBookContext.Provider>
  )
}