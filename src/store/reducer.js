import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 4
};

const ING_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.2,
    bacon: 1.3
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_ING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: state.ingredients[action.ingName] + 1
                },
                totalPrice: state.totalPrice + ING_PRICES[action.ingName]
            };
        case actionTypes.REMOVE_ING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: state.ingredients[action.ingName] - 1
                },
                totalPrice: state.totalPrice - ING_PRICES[action.ingName]
            };
        default:
            return state;
    }
};

export default reducer;