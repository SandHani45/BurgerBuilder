import React from 'react';
//HOC
import Aux from '../../hoc/Aux';
import Button from '../UI/Button';
const OrderSummery = (props) =>{

    const ingredientSummery = Object.keys(props.ingredients)
    .map(isKey =>{
                return(<li key={isKey}><span style={{textTransform:'capitalize'}}>{isKey}</span> {props.ingredients[isKey]}</li>)
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious buger with the following ingredients </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)} </strong></p>
            <Button btnType="Success" click ={props.successClick}>Continue</Button>
            <Button btnType="Danger" click = {props.cancelClick}>Cancel</Button>
        </Aux>
    )
}
export default OrderSummery;