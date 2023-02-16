import React from 'react';
import classes from './Navbar.module.css';
import NavLinks from './NavLinks.jsx';


const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
    <NavLinks />
    </nav>
  );
}

export default Navigation;