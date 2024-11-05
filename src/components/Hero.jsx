import React from 'react';
import Logo from "../img/Logo mesi.png"
const Hero = () => {
  return (
    <section className="hero section ">
      <div className='centered-section'>
        <h2>Educación Sexual para Todos</h2>
      <p>Aprende y crece con información real y confiable.</p>
      <img className='section' src={Logo} alt="" />
      <button>Conoce más</button>
      </div>
      
    </section>
  );
};

export default Hero;