import React from 'react';
import './App.css';
import { PBookContextProvider } from './context/PBookContext';
import PNavBar from './components/PNavBar';

function App() {
  return (
    <div className="App">
      <PBookContextProvider>
        <PNavBar/>
      </PBookContextProvider>
    </div>
  );
}

export default App;
