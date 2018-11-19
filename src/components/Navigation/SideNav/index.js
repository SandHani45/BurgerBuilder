import React from 'react';
import classes from './index.css';

const SideNav = () =>(
    <div className={classes.sidenav}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div>
)

export default SideNav;