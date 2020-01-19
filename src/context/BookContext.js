import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    { title: 'The Way of Kings', id: uuid() },
    { title: 'The Name of the Wind', id: uuid() },
    { title: 'The Final Empire', id: uuid() },
  ]);

  return (
    <BookContext.Provider value={{books, setBooks}}>
      {children}
    </BookContext.Provider>
  )
};