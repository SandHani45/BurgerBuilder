import React,{Component} from "react";
//HOC
import Aux from '../../hoc/Aux';
// COMPONENTS
import Burger from '../../components/Burger';
import BuildControles from "../../components/Burger/BuildControles";
import Modal from '../../components/UI/Modal';
import OrderSummery from '../../components/OrderSummery';

const INGREDIENT_PRICE = {
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false 
    }

    updatePurcheseState(ingredients) {
        console.log(ingredients)
       const sum = Object.keys(ingredients)
            .map(isKey=>{
               return ingredients[isKey];
       }).reduce((sum,el)=>{
           return sum + el;
       },0);
       this.setState({
           purchasable:sum > 0
       });
    }

    purchaseHandler = () =>{
        this.setState({
            purchasing:true
        })
    }
    purchaseCancelHandler = ()=>{
        this.setState({
            purchasing:false
        })
    }
    cancelButtonHandler = () =>{
        this.setState({
            purchasing:false
        })
    }
    successButtonHandler = () =>{
        alert("please continue")
    }
    addIngredintHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1 ;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:updatePrice, ingredients:updatedIngredient
        });
        this.updatePurcheseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount -1 ;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice - priceAddition;
        this.setState({
            totalPrice:updatePrice, ingredients:updatedIngredient
        });
        this.updatePurcheseState(updatedIngredient);
    }
    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal  show={this.state.purchasing} 
                        backDropClick = {this.purchaseCancelHandler}>
                    <OrderSummery 
                        ingredients={this.state.ingredients} 
                        cancelClick={this.cancelButtonHandler} 
                        successClick={this.successButtonHandler}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControles 
                    ingredientAdded = {this.addIngredintHandler}  
                    ingredientRemove={this.removeIngredientHandler} 
                    disable={disableInfo} 
                    price={this.state.totalPrice}
                    purchasable ={this.state.purchasable}
                    purchaseHandler ={this.purchaseHandler}/>
                
            </Aux>
        )
    }
}
export default BurgerBuilder;