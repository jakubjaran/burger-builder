import React from 'react';

import styles from './Burger.module.css';

import BurgerIgredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIgredient key={igKey + i} type={igKey} />;
            });
    }).reduce((arr, el) => {
            return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add igredients!</p>
    };

    return (
        <div className={styles.Burger}>
            <BurgerIgredient type="bread-top" />
            {transformedIngredients}
            <BurgerIgredient type="bread-bottom" />
        </div>
    );
};

export default Burger;