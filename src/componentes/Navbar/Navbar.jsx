import React from 'react';
import classes from './Navbar.module.css'
import Navigation from './Navigation.jsx'
import MobileNavigation from './MobileNavigation.jsx';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.title}>FLUIR</div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
export default Navbar;