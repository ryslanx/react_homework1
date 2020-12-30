import {services} from "../../services";
import {SET_PRODUCTS} from "../action-types";
const {productService} = services

export const setProducts = () => async (dispatch) => {
    const request = await productService.getProducts()
    const json = await request.json()
    dispatch({type: SET_PRODUCTS, payload: json})
}