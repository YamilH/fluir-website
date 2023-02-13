import React from 'react';
import classes from './Clases.module.css'
import PageHeader from './../PageHeader/PageHeader.jsx';

const Clases = () => {
  return (
    <div className={classes.Clases}>
      <PageHeader title={'Clases'}/>
    </div>
  );
}

export default Clases;