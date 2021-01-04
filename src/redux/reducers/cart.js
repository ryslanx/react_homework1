import '../action-types'
import {ADD_PRODUCT_CART, DECREASE_QUANTITY, INCREASE_QUANTITY} from "../action-types";

const initialState = {
     cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART: {
            let new_products = state.cart.filter(product => product.id !== action.payload.id)
            if (new_products.length === state.cart.length) {
                action.payload.quantity = 1
                new_products.push(action.payload)
            }
            return {...state, cart: new_products}
        }
        case INCREASE_QUANTITY: {
            let newProducts = [...state.cart]
            const index = state.cart.findIndex((element) => action.payload.id === element.id)
            action.payload.quantity += 1
            newProducts[index] = action.payload
            return {...state, cart: newProducts}
        }
        case DECREASE_QUANTITY: {
            let newProducts = [...state.cart]
            const index = state.cart.findIndex((element) => action.payload.id === element.id)
            action.payload.quantity -= 1
            newProducts[index] = action.payload
            return {...state, cart: newProducts}
        }
        default: {
            return state
        }
    }
}