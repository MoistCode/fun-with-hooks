import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default class NavBar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {themeContext => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                const { ui, syntax } = theme;

                return (
                  <nav style={{ background: ui, color: syntax }}>
                    <h1>Context App</h1>
                    <div>
                      Logged { isAuthenticated ? 'in' : 'out' }
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
