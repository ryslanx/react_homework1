import React from 'react';
import ProductItem from "./productItem/productItem";

function ProductList(props) {
    const {products} = props
    return (
        <div>
            {
                products.map(product => <ProductItem product={product} />)
            }
        </div>
    );
}

export default ProductList;