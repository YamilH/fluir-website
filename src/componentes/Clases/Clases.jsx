import React from 'react';
import classes from './Clases.module.css'
import PageHeaderWhite from './../PageHeader/PageHeaderWhite.jsx';
import Estimulos from './Estimulos.jsx'
import Fotoclase1 from '../../media/entrenando4.jpg';
import Fotoclase2 from '../../media/entrenando5.jpg';
import Fotoclase3 from '../../media/entrenando6.jpg';
import Wave1 from '../../media/wave2.svg';
import Wave2 from '../../media/wave3.svg';



const Clases = () => {
  return (
    <div className={classes.Clases}>

    <img className={classes.Waveviolet} src={Wave1} alt='svg' id='Clases'></img>

      <PageHeaderWhite title={'Clases'}/>
    <div className={classes.Clasescontent}>
    
    <Estimulos tituloestimulos={'Pilates'}
               textoestimulos={'Pilates es una forma de ejercicio físico que se enfoca en desarrollar fuerza, flexibilidad y control corporal a través de movimientos suaves y controlados. Se basa en la activación consciente de los músculos profundos del núcleo y en la alineación adecuada del cuerpo para mejorar la postura y reducir el riesgo de lesiones.'}
               fotoestimulos={Fotoclase1}
               altestimulos={'foto entrenando'}
    />
    <Estimulos tituloestimulos={'Yoga'}
               textoestimulos={'Yoga es una práctica física y mental que se originó en la India y se ha expandido por todo el mundo. Combina posturas físicas (asanas), respiración y meditación para mejorar la flexibilidad, el equilibrio, la fuerza y la concentración. El yoga también se enfoca en la conexión mente-cuerpo y en la reducción del estrés y la ansiedad.'}
               fotoestimulos={Fotoclase2}
               altestimulos={'foto entrenando'}   
    />
    <Estimulos tituloestimulos={'Funcional'}
               textoestimulos={'El entrenamiento funcional es un enfoque de acondicionamiento físico que se basa en movimientos naturales del cuerpo, como levantamiento, empuje y tracción. El objetivo es mejorar la capacidad del cuerpo para realizar actividades cotidianas y deportes específicos, mediante el uso de ejercicios que involucran múltiples grupos musculares al mismo tiempo. El entrenamiento funcional puede incluir elementos de fuerza, cardio y flexibilidad.'}
               fotoestimulos={Fotoclase3}
               altestimulos={'foto entrenando'}
    />

    <img className={classes.Waveviolet} src={Wave2} alt='svg'></img>
    </div>
    </div>
  );
}

export default Clases;