import React from "react";
import Aux from '../../hoc/Aux';
import classNames from './Layout.css';
const Layout = (props) =>(
    <Aux>
        <div>Header Toolbar </div>
        <main className={classNames.Contant}>
            {props.children}
        </main> 
    </Aux>
)
export default Layout;