import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggler from '../../Navigation/SideDrawer/DrawerToggler/DrawerToggler';

const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggler clicked={props.openSideNav}/>
        <Logo height="80%"/>
        <nav className={styles.DesktopOnly}>
            <NavItems isAuth={props.isAuth}/>
        </nav>
    </header>
);

export default Toolbar;