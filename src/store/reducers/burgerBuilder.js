import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const ING_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.2,
    bacon: 1.3
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingName]: state.ingredients[action.ingName] + 1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + ING_PRICES[action.ingName],
        building: true
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = {[action.ingName]: state.ingredients[action.ingName] - 1}
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - ING_PRICES[action.ingName],
        building: true
    };
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFail = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_ING:           return addIngredient(state, action);
        case actionTypes.REMOVE_ING:        return removeIngredient(state, action);
        case actionTypes.SET_ING:           return setIngredients(state, action)
        case actionTypes.FETCH_ING_FAIL:    return fetchIngredientsFail(state,action);
        default:                            return state;
    }
};

export default reducer;