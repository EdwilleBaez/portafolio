import React from 'react'
import icono from '../assets/icono.png';
import '../scss/navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar1 navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <a className="navbar-brand" href="#">
              <img src={icono} width="50" alt="Logo de la página web"></img>
            </a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#sobre-mi">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactos">Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar;