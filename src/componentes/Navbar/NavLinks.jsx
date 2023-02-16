import React from 'react';

import {motion} from 'framer-motion';


const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <ul>
    <motion.li
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.05}}
      onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Home">Inicio</a></motion.li>
    <motion.li 
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.10}}
      onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#About">Sobre Nosotros</a></motion.li>
    <motion.li 
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.15}}
      onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Clases">Clases</a></motion.li>
    <motion.li 
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.20}}
      onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Skills">Profesionales</a></motion.li>
    <motion.li 
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.25}}
      onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/#Contact">Contacto</a></motion.li>
  </ul>
  );
}

export default NavLinks;