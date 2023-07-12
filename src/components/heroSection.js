import React from 'react'
import edwille from '../assets/edwille.png';
import HeroInferior  from '../assets/hero-inferior.jpg';


import '../scss/heroSection.css';



const HeroSection = () => {
  return (
    <section className='hero hero1 align-items-stretch'>
        <div className='hero-principal'>
            <img src={edwille} className='hero-imagen-desarrollador rounded-circle' alt="Foto de Edwille Báez"  title="Edwille Báez"></img>
            <h1>Hola, soy Edwille Báez</h1>
            <h2>Desarrollo óptimos sitios web</h2>
        </div>
        <div className='hero-inferior'>
        <img src={HeroInferior} className='hero-inferior-imagen img-fluid' alt='Monitor, laptop y logos de HTML, CSS. JavaScrip y React.' />
        </div>
    </section>
   
        
  )
}

export default HeroSection