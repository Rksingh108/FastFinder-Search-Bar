// src/App.js
import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';

function App() {
  return (
    <div className="App">
      <h1>Fast Finder: Search Countries and Capitals</h1>
      <SearchBar />
    </div>
  );
}

export default App;
