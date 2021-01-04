import React, {useState} from 'react';
import cl from './WishlistItem.module.css'
function WishListItem(props) {
    const {item} = props
    return (
        <div className={cl.item}>
            <div className={cl.item_inner}>
                <img className={cl.image} src={item.image} alt=""/>
                <h4>{item.title}</h4>
                <p>{item.price} $</p>
            </div>
        </div>
    );
}

export default WishListItem;