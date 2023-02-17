import React from 'react';
import classes from './Estimulos.module.css'

import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const Estimulos = (props) => {

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    // console.log('use effect in view', inView);
    if(inView){
      animation.start({
        x:0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }
    if (!inView){
      animation.start({x: '-100vw'})
    }

  },[inView]);

  return (
    <div className={classes.Estimulos}

      >
    <div ref={ref} className={classes.Clasescontent}>
      <motion.div className={classes.Paragraph} animate={animation}>
        <h3 className={classes.Tituloestimulos}>{props.tituloestimulos}</h3>
        <p className={classes.Textoestimulos}>{props.textoestimulos}</p>
      </motion.div>
      <motion.div className={classes.Marcofotoestimulos} animate={animation}>
        <img className={classes.Fotoestimulos} src={props.fotoestimulos} alt={props.altestimulos}></img>
      </motion.div>
    </div>

    </div>
    );
  }

  export default Estimulos;