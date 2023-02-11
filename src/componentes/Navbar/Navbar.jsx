import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Sobre Nosotros</a></li>
          <li><a href="/">Clases</a></li>
          <li><a href="/">Profesionales</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;