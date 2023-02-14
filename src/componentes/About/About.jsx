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
          <h2 className={classes.Tituloaboutme}>La búsqueda del Bienestar Fisico y Emocional, es nuestra Prioridad</h2>
          <p className={classes.Textoaboutme}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quas. Commodi esse cumque molestiae quo ab. Nostrum cumque dignissimos adipisci culpa? Enim aut sint autem ad vel officia laudantium. Magni.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat, quo dolorum ipsam voluptatibus quia minima quos ut eius quae omnis? Sed, dignissimos officia sit voluptatem officiis voluptas ab dolorem?
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