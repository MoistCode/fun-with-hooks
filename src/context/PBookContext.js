import React, { createContext, /* useState,*/ useReducer } from 'react';
import uuid from 'uuid';
import { bookReducer } from '../reducers/PBookReducer';

export const PBookContext = createContext();

export const PBookContextProvider = ({children}) => {
  // const [books, setBooks] = useState([
  //   { title: 'The Way of Kings', author: 'cowman1', id: uuid() },
  //   { title: 'The Name of the Wind', author: 'cowman2', id: uuid() },
  //   { title: 'The Final Empire', author: 'cowman3', id: uuid() },
  // ]);

  const [books, dispatch] = useReducer(
    bookReducer, 
    [
      { title: 'The Way of Kings', author: 'cowman1', id: uuid() },
      { title: 'The Name of the Wind', author: 'cowman2', id: uuid() },
      { title: 'The Final Empire', author: 'cowman3', id: uuid() },
    ]
  );
  console.log(books);
  return (
    <PBookContext.Provider value={{books, dispatch}}>
      {children}
    </PBookContext.Provider>
  )
}