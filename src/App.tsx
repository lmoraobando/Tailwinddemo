import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/tailwind.css';
import { Navbar } from './components/navbar/Navbar';
import { Section } from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
    </div>
  );
}

export default App;
