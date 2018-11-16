import React,{Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger'
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:2,
            bacon:0,
            cheese:0,
            meat:0
        } 
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Control</div>
            </Aux>
        )
    }
}
export default BurgerBuilder;