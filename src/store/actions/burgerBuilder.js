import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = ( ingName ) => {
    return {
        type: actionTypes.ADD_ING,
        ingName: ingName
    };
};

export const removeIngredient = ( ingName ) => {
    return {
        type: actionTypes.REMOVE_ING,
        ingName: ingName
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_ING,
        ingredients: ingredients
    };
};

export const fetchIngFail = () => {
    return {
        type: actionTypes.FETCH_ING_FAIL
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burger-builder-jj.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data));
        })
        .catch(error => {
            dispatch(fetchIngFail());
        });
    };
};