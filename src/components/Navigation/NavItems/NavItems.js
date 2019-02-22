import React from 'react';

import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link="/">Burger Builder</NavItem>
        {props.isAuth && <NavItem link="/orders">Orders</NavItem>}
        {!props.isAuth ?
             <NavItem link="/auth">Authentication</NavItem> :
             <NavItem link="/logout">Logout</NavItem>}
    </ul>
);

export default NavItems;