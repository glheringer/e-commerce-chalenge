import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { useCart } from '../../contexts/CartContext';
import '@testing-library/jest-dom';

jest.mock('../../contexts/CartContext', () => ({
  useCart: jest.fn(),
}));

describe('ProductList', () => {
  const mockProducts = [
    {
      listPrice: 120,
      price: 100,
      name: 'Produto 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      listPrice: 250,
      price: 200,
      name: 'Produto 2',
      image: 'https://via.placeholder.com/150',
    },
  ];
  const mockAddToCart = jest.fn();

  beforeEach(() => {
      (useCart as jest.Mock).mockReturnValue({
          addToCart: mockAddToCart,
      });
  });
  
  it('should render correctly', () => {

    (useCart as jest.Mock).mockReturnValue({
      addToCart: jest.fn(),
    });

    const { container } = render(<ProductList products={mockProducts} />);
    
    expect(container).toMatchSnapshot();
  });

  it('should call addToCart when "Adicionar ao Carrinho" button is clicked', () => {
    const { container } = render(<ProductList products={mockProducts} />);
    
    expect(container).toMatchSnapshot();

    const addToCartButtons = screen.getAllByText('Adicionar ao Carrinho');
    expect(addToCartButtons).toHaveLength(mockProducts.length);

    fireEvent.click(addToCartButtons[0]);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0]);

    fireEvent.click(addToCartButtons[1]);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[1]);
  });
  
  it('should display correct price and list price for each product', () => {
    const { getByText } = render(<ProductList products={mockProducts} />);
  
    expect(screen.getByText('R$100.00')).toBeInTheDocument(); 
    expect(screen.getByText('De: $120.00')).toBeInTheDocument();
  });
  
});

