import React, { ReactNode } from "react";
import { ButtonSection, IconSection, StyledButtonIcon } from "./addCartButton.styles";

interface AddCartProps {
  onClick: () => void; 
  children: ReactNode; 
}

const AddCartButton = ({onClick, children}: AddCartProps) => {
  return (
    <ButtonSection onClick={onClick}>
        <IconSection>
            <StyledButtonIcon/>
        </IconSection>
      {children}
    </ButtonSection>
  )
};

export default AddCartButton;
