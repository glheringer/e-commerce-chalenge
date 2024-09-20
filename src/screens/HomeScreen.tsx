import React from "react"
import { CartProvider } from "../contexts/CartContext";

import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

import productsData from '../assets/products.json'; 

const HomeScreen = () => {
    const {products} = productsData;
  return (
 <div>
    <CartProvider>
        <Header/>
        <ProductList products={products} />
    </CartProvider>

 </div>
  )
};

export default HomeScreen;
