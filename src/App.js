import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar/>
        <BookList/>        
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
