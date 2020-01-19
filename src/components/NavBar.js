import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { ui, syntax } = theme;

  return (
    <nav style={{ background: ui, color: syntax }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>Toggle Auth</button>
      <div>
        Logged { isAuthenticated ? 'in' : 'out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
};

export default NavBar;