import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default class NavBar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            const { ui, syntax } = theme;
            
            return (
              <nav style={{ background: ui, color: syntax }}>
                <h1>Context App</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
        }}
      </ThemeContext.Consumer>
    )
  }
}
