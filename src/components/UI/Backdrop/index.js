import React from 'react';
import classes from './index.css';
const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.closeClick}></div> : null
);

export default Backdrop;