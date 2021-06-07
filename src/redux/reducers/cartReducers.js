import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
           const newId = action.id;
           const newCart = [...state.cart, newId];
           return {cart: newCart};
        case REMOVE_TO_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.id !== id);
            return {cart: remainingCart};   
        default:
            return state;    
    }
}

export default cartReducers;