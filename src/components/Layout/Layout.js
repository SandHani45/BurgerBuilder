import React from "react";
import Aux from '../../hoc/Aux';
import classNames from './Layout.css';
import SearchBar from '../Navigation/SearchBar';
const Layout = (props) =>(
    <Aux>
        <SearchBar />
        <main className={classNames.Contant}>
            {props.children}
        </main> 
    </Aux>
)
export default Layout;