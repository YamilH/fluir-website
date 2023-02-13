import React from 'react';
import classes from './Tarjetas.module.css'

const Tarjetas = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Tarjetaprofe}>
        <h2 className={classes.Nombreprofe}>{props.nombreprofe}</h2>
          <div className={classes.MarcoFotoprofe}>
            <img className={classes.Fotoprofe} src={props.fotoprofe} alt={props.altprofe}></img>
            <p className={classes.Datos1profe}>{props.texto1profe}</p>
            <p className={classes.Datos2profe}>{props.texto2profe}</p>
          </div>
      </div>
    </div>
  );
}

export default Tarjetas;