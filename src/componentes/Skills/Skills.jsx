import React from 'react';
import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader.jsx';
import fotoprofe1 from '../../media/david.jpg';
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
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'David'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'Gustavo'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'María'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'Enrique'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'Adriana'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />
      <Tarjetas 
          nombreprofe={'Romina'}
          fotoprofe={fotoprofe1}
          altprofe={'foto de david'}
          texto1profe={'le gusta nadar'}
          texto2profe={'le gustan las hamburguesas'} 
      />

    </div>
    </div>
  );
};
export default Skills;