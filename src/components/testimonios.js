import React from 'react';
import '../scss/testimonios.css';
import { ReactComponent as Cliente1 } from '../assets/cliente1.svg';
import { ReactComponent as Cliente2 } from '../assets/cliente2.svg';
import { ReactComponent as Cliente3 } from '../assets/cliente3.svg';


const testimonios = () => {
  return (
    <section id='testimonios' className='testimonios seccion clara'>
        <h2 className='seccion-titulo'>Testimonios</h2>
        <h3 className='seccion-descripcion'>Estos son algunos testimnios de mis clientes...</h3>

        {/*Carrusel*/}
        <div id="testimonios-carrusel" class="carousel carousel-dark slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='container'>
                        <Cliente1 className='testimonio-imagen rounded-circle' alt="Foto de Gino" />
                        <p className='testimonio-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt eget tellus ut luctus. Praesent lobortis accumsan odio id porttitor.</p>
                        <div className='testimonio-info'>
                            <p className='cliente'>Gino</p>
                            <p className='cargo'>Gerente de proyectos en Desarrollo Web.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='container'>
                        <Cliente2 className='testimonio-imagen rounded-circle' alt="Foto de Gino" />
                        <p className='testimonio-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt eget tellus ut luctus. Praesent lobortis accumsan odio id porttitor.</p>
                        <div className='testimonio-info'>
                            <p className='cliente'>Gino</p>
                            <p className='cargo'>Gerente de proyectos en Desarrollo Web.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='container'>
                        <Cliente3 className='testimonio-imagen rounded-circle' alt="Foto de Gino" />
                        <p className='testimonio-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt eget tellus ut luctus. Praesent lobortis accumsan odio id porttitor.</p>
                        <div className='testimonio-info'>
                            <p className='cliente'>Gino</p>
                            <p className='cargo'>Gerente de proyectos en Desarrollo Web.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}

export default testimonios