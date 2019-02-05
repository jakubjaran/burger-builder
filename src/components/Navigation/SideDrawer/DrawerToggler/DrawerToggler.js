import React from 'react';

import styles from './DrawerToggler.module.css';

const DrawerToggler = (props) => (
    <div onClick={props.clicked} className={styles.DrawerToggler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggler;