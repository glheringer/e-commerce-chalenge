// src/components/header.tsx
import React from 'react';
import { useCart } from '../../contexts/CartContext';

import {
  HeaderContainer,
  Title,
  CartSection,
  IconSection,
  StyledCartIcon,
  CartQuantity,
  CartTotal,
} from './header.styles'; 

const Header = () => {
    const { cartItems, totalPrice } = useCart();
  
    return (
      <HeaderContainer>
        <Title>LaModa STORE</Title>
        <CartSection>
          <IconSection>
            <StyledCartIcon />
          </IconSection>
          <CartQuantity>Carrinho: {cartItems.length} Item(s)</CartQuantity> 
          <CartTotal> - R$ {totalPrice.toFixed(2)}</CartTotal>
        </CartSection>
      </HeaderContainer>
    );
  };
  

export default Header;
