import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
    const ingredients = [];
    for (let ingName in props.ingredients) {
        ingredients.push({
            name: ingName,
            amount: props.ingredients[ingName]
        });
    };

    const ingredientsOutput = ingredients.map(ing => {
        return <span key={ing.name}>{ing.name} ({ing.amount}) </span>;
    })

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Pirce: <strong>$ {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;