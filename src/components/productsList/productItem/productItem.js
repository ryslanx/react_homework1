import React, {useState} from 'react';
import cl from './productItem.module.css'
import {useDispatch} from "react-redux";
import {addProductCart, addProductWishlist} from "../../../redux/action-creators";

function ProductItem(props) {
    const {product} = props
    const dispatch = useDispatch()
    let [addedCart, setAddedCart] = useState(false)
    let [addedWishlist, setAddedWishlist] = useState(false)
    const addToCart = () => {
        dispatch(addProductCart(product))
        setAddedCart(!addedCart)
    }
    const addToWishlist = () => {
        dispatch(addProductWishlist(product))
        setAddedWishlist(!addedWishlist)
    }
    return (
        <div className={cl.item}>
            <div className={cl.item_inner}>
                <img className={cl.image} src={product.image} alt=""/>
                <h4>{product.title}</h4>
                <button style={addedCart ? ({backgroundColor: "green"}) : ({backgroundColor: "red"})} onClick={addToCart} className={cl.cart_button}>{addedCart ? "remove from cart" : "add to cart"}</button>
                <button onClick={addToWishlist} className={cl.wishlist_button}>{addedWishlist ? "remove from wishlist" : "add to wishlist" }</button>
            </div>
        </div>
    );
}

export default ProductItem;