import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider } from '../../contexts/CartContext'; 

import Header from './Header';

const renderWithCartProvider = (children) => {
  return render(<CartProvider>{children}</CartProvider>);
};

describe('Header Component', () => {
  test('should render the header title', () => {
    renderWithCartProvider(<Header />);
    expect(screen.getByText('LaModa STORE')).toBeInTheDocument();
  });

});
