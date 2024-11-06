import './App.css';


import React from 'react';
import {Nav, Hero, About, Topics, Contact, Header} from './components/'
import './App.css';

import { BrowserRouter, Routes,Route, Router} from "react-router-dom"; 
import  Topic1  from './pages';

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
