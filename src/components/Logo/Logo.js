import React from 'react';

import styles from './Logo.module.css';
import logoImg from '../../assets/burger-logo.png';

const Logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="app-logo"/>
    </div>
);

export default Logo;