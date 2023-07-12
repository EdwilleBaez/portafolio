import React from 'react';
import '../scss/experiencia.css';


const experiencia = () => {
  return (
    <section className='experiencia seccion-clara'>
        <div className='container text-center'>
            <div className='row'>
                
                {/* Desarrollo Web */}
                <div className=' columna col-12 col-md-4'>
                <i class="bi bi-laptop"></i>
                    <p className='experiencia-titulo'>Desarrollo Web</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis scelerisque ligula, nec euismod mi dignissim ut. Ut sagittis mi dui.</p>
                    <div className='badges-contenedor'> 
                        <span className='badge text-bg-primary'>HTML</span>
                        <span className='badge text-bg-primary'>CSS</span>
                        <span className='badge text-bg-primary'>JavaScript</span>
                        <span className='badge text-bg-primary'>React</span>
                        <span className='badge text-bg-primary'>SASS</span>
                    </div>
                </div>

                 {/* Articulos */}
                <div className='columna col-12 col-md-4'>
                <i class="bi bi-laptop"></i>
                    <p className='experiencia-titulo'>Articulos</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis scelerisque ligula, nec euismod mi dignissim ut. Ut sagittis mi dui.</p>
                    <div className='badges-contenedor'> 
                        <span className='badge text-bg-primary'>Escribir</span>
                        <span className='badge text-bg-primary'>Editar</span>
                        <span className='badge text-bg-primary'>Blogs</span>
                    </div>
                </div>

                {/* Estudiante*/}
                <div className='columna col-12 col-md-4'>
                <i class="bi bi-laptop"></i>
                    <p className='experiencia-titulo'>Estudiante</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis scelerisque ligula, nec euismod mi dignissim ut. Ut sagittis mi dui.</p>
                    <div className='badges-contenedor'> 
                        <span className='badge text-bg-primary'>freeCodeCamp</span>
                        <span className='badge text-bg-primary'>Desarrollo Web</span>
                        <span className='badge text-bg-primary'>Python</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default experiencia