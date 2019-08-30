import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        }
    )

    return (
        <Aux>
            <h1>Your Order</h1>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: {props.price.toFixed(2)}</p>
            <p>Continue to Checkouts ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;