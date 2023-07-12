import React from 'react';
import '../scss/footer.css';
import { ReactComponent as IconoBlanco } from '../assets/icono-blanco.svg';

const footer = () => {
  return (
    <footer className='seccion-oscura d-flex flex-column align-items-center justify-content-center'> 
        <IconoBlanco className='footer-logo' alt='Logo del portafolio' />
        <p className='footer-texto text-center'>Aprendo y creo todos los días.<br/>Juntos podemos hacer grandes cosas.</p>
        <div className='iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center'>
            <a href='https://github.com/EdwilleBaez' target='_blank' rel='noopener noreferrer'>
                <i class="bi bi-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/edwillebaez/' target='_blank' rel='noopener noreferrer'>
                <i class="bi bi-linkedin"></i>
            </a>
            <a href='mailto:baezedwille@gmail.com' target='_blank' rel='noopener noreferrer'>
                <i class="bi bi-envelope"></i>
            </a>
        </div>
        <div className='derechos-de-autor'>Creado por Edwille Báez (2023) &#169;</div>
    </footer>
  )
}

export default footer