import React, {Component} from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHanlder from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

class BurgerBuidler extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    };

    // componentDidMount = () => {
    //     axios.get('https://burger-builder-jj.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             this.setState({ingredients: response.data});
    //         })
    //         .catch(error => {
    //             this.setState({error: true});
    //         });
    // }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHanler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHanlder = () => {
        this.props.history.push('/checkout');
    };

    render () {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngAdded}
                        ingredientRemoved={this.props.onIngRemoved}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchaseable={this.updatePurchaseState(this.props.ings)}
                        purchaseHandler={this.purchaseHandler}/>
                </>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHanler}
                purchaseContinued={this.purchaseContinueHanlder}
                totalPrice={this.props.totalPrice}/>
        };

        if (this.state.loading) {
            orderSummary = <Spinner />
        };

        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHanler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngAdded: (ingName) => dispatch({type: actionTypes.ADD_ING, ingName: ingName}),
        onIngRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_ING, ingName: ingName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHanlder(BurgerBuidler, axios));