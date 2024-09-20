import styled from 'styled-components';

export const ProductContainer = styled.div`
   font-family: 'Heebo', sans-serif;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 32px;
   gap: 16px;
   box-sizing: border-box;
   max-width: 1200px;
   margin: 0 auto;
`;

export const ProductItem = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  width: calc(33.33% - 32px);
  box-sizing: border-box;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Heebo', sans-serif;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 8px;
  }

  h2 {
    font-family: 'Heebo', sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    letter-spacing: .56px;

    padding-bottom: 8px;
    border-bottom: solid;
    border-width: 1px;
    border-color: #D1D1D1;
  }

  h3 {
    font-family: 'Heebo', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    font-size: 14px;
    letter-spacing: .56px;
    margin-bottom: 8px;
  }

  p {
    font-family: 'Heebo', sans-serif;
    margin: 4px 0;
  }
  //Para exibir 2 produtos por linha
  @media (max-width: 768px) {
    width: calc(50% - 32px);
  }
  //Para exibir 1 produtos por linha
  @media (max-width: 480px) {
    width: calc(100% - 32px);
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 8px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.35);
  }
`;

export const PreviousPrice = styled.p`
  margin: 4px 0;
  text-decoration: line-through;
  font-family: 'Heebo', sans-serif;
`;
