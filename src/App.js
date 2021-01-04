import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductList from "./components/productsList/ProductList";
import {setProducts} from "./redux/action-creators";
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist/WishList";
library.add(faHeart, faShoppingCart)

function App(props) {
    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path={"/"} exact={true} render={() => {
                        return (<ProductList products={products} />)
                    }} />
                    <Route path={"/cart"} render={() => {
                        return (<Cart />)
                    }} />
                    <Route path={"/wishlist"} render={() => {
                        return (<WishList />)
                    }} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;