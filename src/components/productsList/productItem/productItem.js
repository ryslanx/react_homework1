import React from 'react';
import cl from './productItem.module.css'
function ProductItem(props) {
    const {product} = props
    return (
        <div className={cl.item}>
            <img className={cl.image} src={product.image} alt=""/>
            <h3>{product.title}</h3>
        </div>
    );
}

export default ProductItem;