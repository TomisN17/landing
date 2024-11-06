
import React from 'react';
import {Nav, Hero, About, Topics, Qr, Header} from './components/'
import './App.css';

function App() {
  

  return (
      <div className="App">
        <div>
        <Header/>
        <Nav />
        <Hero />
        <About />
        <Topics />
        <Qr />
        </div>
        </div>
  );
}

export default App;
