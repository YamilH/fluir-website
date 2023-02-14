import React from 'react';
import classes from './Contact.module.css'
import PageHeaderWhite from './../PageHeader/PageHeaderWhite.jsx';
import Wave1 from '../../media/wave2.svg';
import Wave3 from '../../media/wave4.svg';
import icono1 from '../../media/phone.svg';
import icono2 from '../../media/instagram.svg';
import icono3 from '../../media/house.svg';

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <img className={classes.Waveviolet} src={Wave1} alt='svg'></img>
      <div id='Contact'></div>
      <PageHeaderWhite title={'Contacto'}/>
      <img class={classes.Infodecontacto} src={icono1} alt='icono'></img>
      <p className={classes.TextoContacto}>Comunicate con nosotros al 341 6099418.</p>

      <a href="https://www.instagram.com/fluir.rosario/" rel='noreferrer' class={classes.Ig} target="_blank">
  <i><img class={classes.Infodecontacto} src={icono2} alt='icono'></img></i>
  </a>

      
      <p className={classes.TextoContacto}>También podemos conectarnos a través de nuestro Instagram: @fluir.rosario</p>
      <img class={classes.Infodecontacto} src={icono3} alt='icono'></img>
      <p className={classes.TextoContacto}>Nos encontramos en Av. Alberdi 431, Rosario, Santa Fe.</p>



      <iframe className={classes.Map} title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13396.220224329452!2d-60.6795721!3d-32.9231436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653390d276909%3A0xd5a9666094f0b03a!2sFluir%20~%20Bienestar%20F%C3%ADsico%20y%20Emocional!5e0!3m2!1ses-419!2sar!4v1676402003810!5m2!1ses-419!2sar" width="60%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


      <img className={classes.Waveviolet} src={Wave3} alt='svg'></img>

      <div className={classes.realfootercontainer}>
        <div className={classes.realfooterbody}>
          <div className={classes.realfooter1}></div>
          <h5 className={classes.footer_h5}>&copy; 2023 Todos los Derechos Reservados</h5>
          <div className={classes.realfooter2}></div> 
          <h6 className={classes.footer_h6}>powered by <a className={classes.link} href="https://ar.linkedin.com/in/yamilhamui" target="_blank" rel='noreferrer'>YamilH</a></h6>
        </div>
      </div>

    </div>
  );
};
export default Contact;