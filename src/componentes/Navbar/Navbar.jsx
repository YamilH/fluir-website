import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <nav>
        <ul>
          <li><a href="/#Home">Inicio</a></li>
          <li><a href="/#About">Sobre Nosotros</a></li>
          <li><a href="/#Clases">Clases</a></li>
          <li><a href="/#Skills">Profesionales</a></li>
          <li><a href="/#Contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;