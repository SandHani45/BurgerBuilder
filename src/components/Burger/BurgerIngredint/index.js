import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classNames from './index.css'
class BurgerIngredint extends Component {
    render(){
        let ingredient = null;
        switch(this.props.type) {
            case('bread-bottom'):
            ingredient = <div className={classNames.BreadBottom}></div>;
            break;
            case('bread-top'):
            ingredient = (
                <div className={classNames.BreadTop}>
                    <div className={classNames.Seeds1}></div>
                    <div className={classNames.Seeds2}></div>
                </div>
            );
            break;
            case('meat'):
            ingredient = <div className={classNames.Meat}></div>;
            break;
            case('cheese'):
            ingredient = <div className={classNames.Cheese}></div>;
            break;
            case('bacon'):
            ingredient = <div className={classNames.Bacon}></div>;
            break;
            case('salad'):
            ingredient = <div className={classNames.Salad}></div>;
            break;
            default:
            ingredient = null;
           
      }
      return ingredient;
      
    } 
}
BurgerIngredint.propTypes = {
    type:PropTypes.string.isRequired
}

export default BurgerIngredint;