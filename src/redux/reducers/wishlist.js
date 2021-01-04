import {ADD_PRODUCT_WISHLIST} from "../action-types";

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_WISHLIST: {
            let new_products = state.wishlist.filter(product => product.id !== action.payload.id)
            if (new_products.length === state.wishlist.length) {
                new_products.push(action.payload)
            }
            return {...state, wishlist: new_products}
        }
        default: {
            return state
        }
    }
}