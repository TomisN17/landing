import React from 'react';
import Aula from '../img/esi-en-la-escuela-2.jpg';

const About = () => {
  return (
    <section>
    <div id="about" className="about centered-section section">
      <h3>¿Qué es el Proyecto MESSI?</h3>
      <p>El Proyecto MESSI es una plataforma educativa que busca enseñar sobre educación sexual a niños y jóvenes de manera sana y segura.</p>
      <img className='section' src={Aula} alt="" />
    </div>
    <div>
    {/*  
    <section className="centered-section">
            <h2>Mi Título</h2>
            <image src="./" alt="Descripción de la imagen" />
            <p>Este es el texto debajo de la imagen.</p>
        </section>
         */}
    </div>
    </section>
  );
};

export default About;