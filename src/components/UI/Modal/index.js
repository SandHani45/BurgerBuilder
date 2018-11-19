import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop';
//CSS
import classes from './index.css';

const Modal= (props) =>(
    <Aux>
        <Backdrop show={props.show} closeClick={props.backDropClick}/>
        <div 
            className={classes.Modal}
            style={{transform:props.show ?'translateY(0)':'translatey(-100vh)',
                    opacity:props.show ? '1': '0'}}>
            {props.children}
        </div>
    </Aux>
);
export default Modal;
