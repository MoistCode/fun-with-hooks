import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { bg, syntax, ui } = theme;

  return (
    <div className='book-list' style={{ background: bg, color: syntax }}>
      <ul>
        <li style={{ background: ui }} >The Way of Kings</li>
        <li style={{ background: ui }} >The Name of the Wind</li>
        <li style={{ background: ui }} >The Final Empire</li>
      </ul>
    </div>
  )
};

export default BookList;