import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BookList/>
    </div>
  );
}

export default App;
