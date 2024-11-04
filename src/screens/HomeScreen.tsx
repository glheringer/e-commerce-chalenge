import React from "react"
import { CartProvider } from "../contexts/CartContext";

import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

import productsData from '../assets/products.json'; 
import { Provider } from "react-redux";
import store from "../store/store";

const HomeScreen = () => {
    const {products} = productsData;
  return (
 <div>
    {/* <CartProvider> */}
    <Provider store={store}>
        <Header/>
        <ProductList products={products} />
    {/* </CartProvider> */}
    </Provider>

 </div>
  )
};

export default HomeScreen;
