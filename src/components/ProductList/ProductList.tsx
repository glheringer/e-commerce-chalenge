import React from 'react';
import { useCart } from '../../contexts/CartContext';

import { ImageContainer, PreviousPrice, ProductContainer, ProductImage, ProductItem } from './product.styles';
import AddCartButton from '../AddCartButton/AddCartButton';

interface Product {
    listPrice: number;
    price: number;
    name: string | undefined;
    image: string | undefined;
 
  }

interface ProductsProps{
    products: Product[];
}
const ProductList = ({ products}:ProductsProps) => {
    const { addToCart } = useCart(); 

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    return (
        <ProductContainer>
            {products.map((product, index) => (
                <ProductItem key={index}>
                  <ImageContainer>
                        <ProductImage src={product.image} alt={product.name} />
                    </ImageContainer>
                    <h2>{`R$${product.price.toFixed(2)}`}</h2>
                    <h3>{product.name}</h3>
                    <PreviousPrice>{`De: $${product.listPrice.toFixed(2)}`}</PreviousPrice>
                    <p>{`Por: $${product.price.toFixed(2)}`}</p>
                    <AddCartButton onClick={() => handleAddToCart(product)}>
                        Adicionar ao Carrinho
                    </AddCartButton>
                </ProductItem>
            ))}
        </ProductContainer>
    );
};

export default ProductList;
