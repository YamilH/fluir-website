import React from 'react';


const NavLinks = (props) => {
  return (
    <ul>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Home">Inicio</a></li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#About">Sobre Nosotros</a></li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Clases">Clases</a></li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Skills">Profesionales</a></li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Contact">Contacto</a></li>
  </ul>
  );
}

export default NavLinks;