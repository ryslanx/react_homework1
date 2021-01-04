import React from 'react';
import CartItem from "./cartItem/CartItem";
import {useSelector} from "react-redux";
import cl from './Cart.module.css'

function Cart(props) {
    const cartItems = useSelector(({cart: {cart}}) => cart)
    const calcTotal = () => {
        const total = cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
        return total.toFixed(2)
    }
    return (
        <div>
            {
                cartItems.map(item => <CartItem item={item} />)
            }
            <h3 className={cl.total}>Total: {calcTotal()} $</h3>
            <button className={cl.checkout_button}>Checkout</button>
        </div>
    );
}

export default Cart;