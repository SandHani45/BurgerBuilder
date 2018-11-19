import React from 'react';
//COMPONENTS
import BuildControl from './BuildControl';
//CSS
import classes from './index.css' 
const controls = [
    { label:'Salad', type:'salad' },
    { label:'Bacon', type:'bacon' },
    { label:'Cheese', type:'cheese' },
    { label:'Meat', type:'meat' },
]
const BuildControles = (props) =>(
    <div className={classes.BuildControls}>
    <p> Current Price: <b>{props.price.toFixed(2)} rs</b></p>
        {controls.map(cntrl =>(
            <BuildControl 
                key={cntrl.label} 
                label={cntrl.label}
                added={()=>props.ingredientAdded(cntrl.type)}
                removed={()=>props.ingredientRemove(cntrl.type)}
                disable={props.disable[cntrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.purchaseHandler}>ORDER NOW</button>
    </div>
)


export default BuildControles;