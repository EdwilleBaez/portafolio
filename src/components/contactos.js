import React from 'react';
import '../scss/contactos.css';

const contactos = () => {
  return (
    <section id='contactos' className='contacto seccion-oscura'>
        <div className='container'>
            <div className='container text-center  rectangulo d-flex justify-content-evenly'>
                <div className='row'>
                    <div className='col-12 col-md-4 seccion-titulo'>
                        ¡Hablemos!
                    </div>
                    <div className='col-12 col-md-4 descripcion'>
                        Contáctame para iniciar tu proyecto de desarrollo web y haré tu visión realidad.
                    </div>
                    <div className='col-12 col-md-4 '>
                        <a href='mailto:baezedwille@gmail.com'>
                            <button type='button'>
                                Contacto <i class="bi bi-envelope-check-fill"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contactos