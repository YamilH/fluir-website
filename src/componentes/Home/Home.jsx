import React from 'react';
import classes from './Home.module.css'
import Entrenando1 from '../../media/entrenando1.jpg';

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello</h1>
        <h1>Estas listo para sentirte mejor?</h1>
      </div>
      <img className={classes.Entrenando1} src={Entrenando1} alt='muchacha-entrenando'></img>
    </div>
  );
};
export default Home;