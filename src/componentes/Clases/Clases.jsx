import React from 'react';
import classes from './Clases.module.css'
import PageHeaderWhite from './../PageHeader/PageHeaderWhite.jsx';
import Estimulos from './Estimulos.jsx'
import Fotoclase1 from '../../media/entrenando4.jpg';
import Wave1 from '../../media/wave2.svg';
import Wave2 from '../../media/wave3.svg';

const Clases = () => {
  return (
    <div className={classes.Clases}>

    <img className={classes.Waveviolet} src={Wave1} alt='svg'></img>
      <PageHeaderWhite title={'Clases'}/>

    <div className={classes.Clasescontent}>
    
    <Estimulos tituloestimulos={'Pilates'}
               textoestimulos={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quas. Commodi esse cumque molestiae quo ab. Nostrum cumque dignissimos adipisci culpa? Enim aut sint autem ad vel officia laudantium. Magni.'}
               fotoestimulos={Fotoclase1}
               altestimulos={'foto entrenando'}
    />
    <Estimulos tituloestimulos={'Yoga'}
               textoestimulos={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quas. Commodi esse cumque molestiae quo ab. Nostrum cumque dignissimos adipisci culpa? Enim aut sint autem ad vel officia laudantium. Magni.'}
               fotoestimulos={Fotoclase1}
               altestimulos={'foto entrenando'}   
    />
    <Estimulos tituloestimulos={'Funcional'}
               textoestimulos={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quas. Commodi esse cumque molestiae quo ab. Nostrum cumque dignissimos adipisci culpa? Enim aut sint autem ad vel officia laudantium. Magni.'}
               fotoestimulos={Fotoclase1}
               altestimulos={'foto entrenando'}
    />
    </div>
    <img className={classes.Waveviolet} src={Wave2} alt='svg'></img>
    </div>
  );
}

export default Clases;