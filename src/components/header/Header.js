import React from 'react';
import cl from './Header.module.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Header(props) {
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({wishlist, cart}))
    return (
        <header>
            <div>
                <h3><Link to={"/"} ><span className={cl.header_span}>urstore</span>.com</Link></h3>
            </div>
            <div className={cl.icons}>
                <Link className={cl.wishlist_box} to={"/wishlist"}>
                    <FontAwesomeIcon className={cl.heart_icon} icon={["fas", "heart"]} />
                    {wishlist.length}
                </Link>
                <Link to={"/cart"}>
                    <FontAwesomeIcon className={cl.cart_icon} icon={"shopping-cart"} />
                    {cart.length}
                </Link>
            </div>
        </header>
    );
}

export default Header;