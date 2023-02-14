import React from 'react';
import classes from './PageHeaderWhite.module.css'

const PageHeaderWhite = (props) => {
  return (
    <div className={classes.Container}>
      <hr />
      <h1 className={classes.Header}>{props.title}</h1>
    </div>
  );
}

export default PageHeaderWhite;