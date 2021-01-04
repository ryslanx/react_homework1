import React from 'react';
import WishListItem from "./WishlistItem/WishListItem";
import {useSelector} from "react-redux";

function WishList(props) {
    const wishlistItems = useSelector(({wishlist: {wishlist}}) => wishlist)
    return (
        <div>
            {
                wishlistItems.map(item => <WishListItem item={item} />)
            }
        </div>
    );
}

export default WishList;