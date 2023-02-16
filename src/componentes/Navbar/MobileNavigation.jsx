import classes from './Navbar.module.css';
import NavLinks from './NavLinks.jsx';
import Hamburger from '../../media/hamburger.svg';
import Closehamburger from '../../media/close.svg';
import {useState} from 'react';


const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <img src={Hamburger} className={classes.Hamburger} alt='Abrir Menu' size='40px'
  onClick={() => setOpen(!open)}></img>

  const closeIcon = <img src={Closehamburger} className={classes.Hamburger} alt='Abrir Menu' size='40px'
  onClick={() => setOpen(!open)}></img>

  const closeMobileMenu = () => setOpen(false);


  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
  
    </nav>
  );
}

export default MobileNavigation;