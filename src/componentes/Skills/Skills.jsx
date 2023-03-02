import React from 'react';
import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader.jsx';
import fotoprofe1 from '../../media/rocio.jpg';
import fotoprofe2 from '../../media/david.jpg';
import fotoprofe3 from '../../media/nazarena.jpg';
import Tarjetas from './Tarjetas.jsx'

const Skills = () => {
  return (
    <div className={classes.Skills} id='Skills'>
      <PageHeader title={'Nuestro Equipo'}/>

    <div className={classes.Container}>
      <Tarjetas 
          nombreprofe={'Rocío'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'Cumple: 13 de Agosto'}
          texto2profe={'Hobby: Tomar mates'} 
          texto3profe={'Comida: Sanguchitos de Miga'} 
      />
      <Tarjetas 
          nombreprofe={'David'}
          fotoprofe={fotoprofe2}
          altprofe={'foto de david'}
          texto1profe={'Hobby: Nadar'}
          texto2profe={'Comida: Tortilla de Papa'} 
      />
      <Tarjetas 
          nombreprofe={'Nazarena'}
          fotoprofe={fotoprofe3}
          altprofe={'foto de david'}
          texto1profe={'Cumple: 11 de Junio'}
          texto2profe={'Hobby: Yoga'} 
          texto3profe={'Comida: Pastas con Mixta'} 
      />

    </div>
    </div>
  );
};
export default Skills;