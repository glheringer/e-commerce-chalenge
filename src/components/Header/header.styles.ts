import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 16px; 
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 600px) {
    flex-direction: column; 
    align-items: flex-start; 
  }
`;

export const Title = styled.h1`
  font-size: 20px; 
  font-weight: bold;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px; 
  }
`;

export const CartSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #E2E2E2;
  @media (max-width: 600px) {
   margin-top: 8px;
  }
`;

export const IconSection = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
`;

export const StyledCartIcon = styled(ShoppingCartIcon)`
  font-size: 20px; 
  margin-right: 8px;
  background-color: #C7C0C0;
  color: white;
  padding: 6px;
`;
export const CartQuantity = styled.span`
  margin-left: 8px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const CartTotal = styled.span`
  margin-left: 8px;
  margin-right: 24px; 
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
