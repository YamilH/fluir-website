import React from 'react';
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader.jsx';
import EntrenandoFoto3 from '../../media/entrenando3.jpg';

const About = () => {
  return (
    <div className={classes.AboutMe} id='About'>
      <PageHeader title={'Sobre Nosotros'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2 className={classes.Tituloaboutme}>Nuestra Pasión</h2>
          <p className={classes.Textoaboutme}>La búsqueda del Bienestar Fisico y Emocional, es nuestra Prioridad. En FLUIR te esperemos para que entrenes con nosotros y te saquemos una sonrisa en el proceso.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.EntrenandoFoto3} src={EntrenandoFoto3} alt='entrenando'></img>
        </div>
      </div>
    </div>
  );
}

export default About;