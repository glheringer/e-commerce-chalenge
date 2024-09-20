import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ButtonSection = styled.button`
  display: flex;
  align-items: center;
  background-color: #E2E2E2;
  width: 12vw;
  padding:0;
  border-color: white;
  border-width: 0;  
  
  font-family: 'Heebo';
  font-weight: 400;
  font-size: 14px;
  cursor: pointer; 

  @media (max-width: 768px) {
    width: 20vw;
    font-size: 14px; 
  }

  @media (max-width: 480px) {
    width: 40vw;
    font-size: 12px; 
  }

  &:hover {
    background-color: #d1d1d1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #c7c0c0;
  }
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const StyledButtonIcon = styled(ShoppingCartIcon)`
  font-size: 24px;
  margin-right: 8px;
  background-color: #C7C0C0;
  color: white;
  padding: 8px;
`;
