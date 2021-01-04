import '../action-types'
import {SET_PRODUCTS, ADD_PRODUCT} from "../action-types";

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, products: action.payload}
        }
        default: {
            return state
        }
    }
}