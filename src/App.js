import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductList from "./components/productsList/ProductList";
import {setProducts} from "./redux/action-creators";
library.add(faHeart, faShoppingCart)

function App(props) {
    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    return (
        <div>
            <Header />
            <ProductList products={products} />
        </div>
    );
}

export default App;