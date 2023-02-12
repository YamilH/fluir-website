import React from 'react';
import classes from './Home.module.css'
// import Entrenando1 from '../../media/entrenando1.jpg';
import entrenandovideo from '../../media/entrenandovideo.mp4';

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <div className={classes.Overlay}></div>
        <video className={classes.Video} src={entrenandovideo} autoPlay loop muted></video>
        </div>
        <div className={classes.Hello}>
        <h1 >FLUIR</h1>
        <h1>Preparate para sentirte mejor</h1>
      </div>
      {/* <img className={classes.Entrenando1} src={Entrenando1} alt='muchacha-entrenando'></img> */}


    </div>
  );
};
export default Home;