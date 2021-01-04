import {services} from "../../services";
import {
    ADD_PRODUCT_CART,
    ADD_PRODUCT_WISHLIST,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    SET_PRODUCTS
} from "../action-types";
const {productService} = services

export const setProducts = () => async (dispatch) => {
    const request = await productService.getProducts()
    const json = await request.json()
    dispatch({type: SET_PRODUCTS, payload: json})
}

export const addProductWishlist = (payload) => ({type: ADD_PRODUCT_WISHLIST, payload})
export const addProductCart = (payload) => ({type: ADD_PRODUCT_CART, payload})

export const increaseQuantity = (payload) => ({type: INCREASE_QUANTITY, payload})
export const decreaseQuantity = (payload) => ({type: DECREASE_QUANTITY, payload})