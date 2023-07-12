import React from 'react'
import '../scss/articulos.css';

const articulos = () => {
  return (
   <section className='articulos justify-content-start'>
        <h2 className='seccion-titulo texto-negro'>Artículos</h2>
        <div class="card">
            <div class="card-header">
                Más recientes
            </div>
            <ul class="list-group list-group-flush">
                <a href="" target='_blank' rel="noopener noreferrer">
                    <li class="list-group-item">An item</li>
                </a>
                <a href="" target='_blank' rel="noopener noreferrer">
                    <li class="list-group-item">An item</li>
                </a>
                <a href="" target='_blank' rel="noopener noreferrer">
                    <li class="list-group-item">A second item</li>
                </a>
                <a href="" target='_blank' rel="noopener noreferrer">
                    <li class="list-group-item">A third item</li>
                </a>
            </ul>
        </div>
        <a href='https://github.com/EdwilleBaez' target='_blank' rel='noopener noreferred'>
            <button type='button' class='btn btn-info'>
                Ver más artículos <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
        </a>
   </section>
  )
}

export default articulos