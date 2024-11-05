import './App.css';


import React from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Contact from './components/Contact';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Nav />
      <Hero />
      <About />
      <Topics />
      <Contact />
    </div>
    </div>
  );
}

export default App;
