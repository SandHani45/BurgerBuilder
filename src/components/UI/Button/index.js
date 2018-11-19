import React from 'react';
// Css
import classes from './index.css';
const Button =(props) =>(
    <button 
        className={[classes.Button, classes[props.btnType]].join(' ')} 
        onClick={props.click}> {props.children} </button>
)
export default Button;