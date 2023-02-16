import React from 'react';
import classes from './Navbar.module.css'
import Navigation from './Navigation.jsx'
import MobileNavigation from './MobileNavigation.jsx';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
export default Navbar;