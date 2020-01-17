import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}
