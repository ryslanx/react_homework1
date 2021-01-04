import React, {useState} from 'react';
import cl from './cartItem.module.css'
import {useDispatch} from "react-redux";
import {addProductCart, addProductWishlist, increaseQuantity} from "../../../redux/action-creators";

function ProductItem(props) {
    const {item} = props
    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(increaseQuantity(item))
    }
    return (
        <div className={cl.item}>
            <div className={cl.item_inner}>
                <img className={cl.image} src={item.image} alt=""/>
                <h4>{item.title}</h4>
                <p>{item.price} $</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={addItem}>Add</button>
            </div>
        </div>
    );
}

export default ProductItem;