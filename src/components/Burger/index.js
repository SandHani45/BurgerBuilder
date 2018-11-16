import React from 'react';
import classNames from './index.css';
import BurgerIngredint from './BurgerIngredint';
const Burger = (props) =>{
    let tranferIngredients = Object.keys(props.ingredients)
        .map(inKey => {
             return [...Array(props.ingredients[inKey])].map((_, i) =>{
              return <BurgerIngredint key={inKey + i } type={inKey} />
             });
    }).reduce((preview,current)=>{
        return preview.concat(current);
    },[]);
    if(tranferIngredients.length === 0){
        tranferIngredients = <p>Please add ingridient</p>
    }
    console.log(tranferIngredients)
    return(
        <div className={classNames.Burger}>
            <BurgerIngredint type="bread-top" />
            {tranferIngredients}
            <BurgerIngredint type="bread-bottom" />
        </div>
    )
}
export default Burger;

 