import React from 'react'
import '../scss/proyectos.css'
import Proyecto1 from '../assets/proyecto1.png'
import Proyecto2 from '../assets/proyecto2.png'
import Proyecto3 from '../assets/proyecto3.png'
import Proyecto4 from '../assets/proyecto4.png'
import Proyecto5 from '../assets/proyecto5.png'
import Proyecto6 from '../assets/proyecto6.png'


const proyectos = () => {
  return (
    <section id='proyectos' className='proyectos-recientes seccion-clara d-flex flex-column'>
        <h2 className='seccion-titulo texto-negro'>Mis proyectos recientes</h2>
        <h3 className='seccion-descripcion'>Estos son algunos proyectos que he creado recientemente...</h3>
            {/*Galeria de proyectos*/}
        <div className='container text-center proyectos-contenedor'>
            <div className='row'>
                    {/*Proyecto 1*/}
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='proyecto'>
                    <img src={Proyecto1} alt='Proyecto 1' />
                        <div className='overlay'>
                            <p>Gestor de citas</p>
                            <div className='iconos-contenedor'>
                                <a href='https://beaty-appointment-manager.netlify.app/' target='_blank' rel='noopener noreferred'>
                                    <i class="bi bi-laptop"></i>
                                </a>
                                <a href='https://github.com/EdwilleBaez/GestorDeCitas' target='_blank' rel='noopener noreferred'>
                                    <i class="bi bi-github"></i>                               
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                     {/*Proyecto 2*/}
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='proyecto'>
                    <img src={Proyecto2} alt='Proyecto 2' />
                        <div className='overlay'>
                            <p>Figma Diseño</p>
                            <div className='iconos-contenedor'>
                                <a href='https://emerald-project.netlify.app/' target='_blank' rel='noopener noreferred'>
                                <i class="bi bi-laptop"></i>                               
                                </a>
                                <a href='https://github.com/EdwilleBaez/Emerald' target='_blank' rel='noopener noreferred'>
                                    <i class="bi bi-github"></i>                               
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                     {/*Proyecto 3*/}
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className='proyecto'>
                    <img src={Proyecto3} alt='Proyecto 3' />
                        <div className='overlay'>
                            <p>Figma Diseño</p>
                            <div className='iconos-contenedor'>
                                <a href='https://figma-desing.netlify.app/' target='_blank' rel='noopener noreferred'>
                                    <i class="bi bi-laptop"></i>
                                </a>
                                <a href='https://github.com/EdwilleBaez/dark-mode-dashboard' target='_blank' rel='noopener noreferred'>
                                    <i class="bi bi-github"></i>                               
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href='https://github.com/EdwilleBaez' target='_blank' rel='noopener noreferred'>
            <button type='button' class='btn btn-info mb-5'>
                Ver más proyectos <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
        </a>
    </section>
  )
}

export default proyectos