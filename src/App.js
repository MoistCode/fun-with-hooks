import React from 'react';
import './App.css';
import { PBookContextProvider } from './context/PBookContext';
import PNavBar from './components/PNavBar';
import PBookList from './components/PBookList';
import PBookForm from './components/PBookForm';

function App() {
  return (
    <div className="App">
      <PBookContextProvider>
        <PNavBar/>
        <PBookList/>
        <PBookForm/>
      </PBookContextProvider>
    </div>
  );
}

export default App;
