import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, setBooks } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const { bg, syntax, ui } = theme;

  return (
    <div className='book-list' style={{ background: bg, color: syntax }}>
      <ul>
        {books.map(book => <li style={{background: ui}}>{book.title}</li>)}
      </ul>
    </div>
  )
};

export default BookList;