import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'Asus Laptop', id: 1},
        {name: 'Lenovo Laptop', id: 2},
        {name: 'Dell Laptop', id: 3},
        {name: 'HP Laptop', id: 4},
        {name: 'Toshiba Laptop', id: 5}
    ],
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
           const newItem = {
               productId: action.id,
               name: action.name,
               cartId: state.cart.length + 1
           }
           const newCart = [...state.cart, newItem];
           return {...state , cart: newCart};

        case REMOVE_TO_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart};   

        default:
            return state;    
    }
}

export default cartReducers;