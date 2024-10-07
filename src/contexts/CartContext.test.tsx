import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider, useCart } from './CartContext';

const TestComponent = () => {
  const { cartItems, totalPrice, addToCart } = useCart();
  
  return (
    <div>
      <h1>Total Price: R${totalPrice.toFixed(2)}</h1>
      <button onClick={() => addToCart({ id: 1, price: 100 })}>Add Item</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{`Item ID: ${item.id}, Price: R$${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

describe('CartContext', () => {
    test('should add items to the cart and update the total price', async () => {
        render(
          <CartProvider>
            <TestComponent />
          </CartProvider>
        );
      
        fireEvent.click(screen.getByText('Add Item'));

        expect(await screen.findByText('Total Price: R$100.00')).toBeInTheDocument();
        expect(await screen.findByText('Item ID: 1, Price: R$100')).toBeInTheDocument();
      });

  it('should initialize with an empty cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );


    expect(screen.queryByText('Item ID: 1')).not.toBeInTheDocument();
    expect(screen.getByText('Total Price: R$0.00')).toBeInTheDocument();
  });
  
  test('should throw an error if useCart is used outside of CartProvider', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useCart deve ser usado dentro de um CartProvider');
  
    consoleErrorSpy.mockRestore();
  });
});
