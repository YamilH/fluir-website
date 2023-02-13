import React from 'react';
import classes from './Estimulos.module.css'

const Estimulos = (props) => {
  return (
    <div className={classes.Estimulos}>
    <div className={classes.Clasescontent}>
      <div className={classes.Paragraph}>
        <h3 className={classes.Tituloestimulos}>{props.tituloestimulos}</h3>
        <p className={classes.Textoestimulos}>{props.textoestimulos}</p>
      </div>
      <div className={classes.Marcofotoestimulos}>
        <img className={classes.Fotoestimulos} src={props.fotoestimulos} alt={props.altestimulos}></img>
      </div>
    </div>

    </div>
    );
  }

  export default Estimulos;