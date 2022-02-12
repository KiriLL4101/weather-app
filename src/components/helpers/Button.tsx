import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => props.theme.bgCard};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.8s ease-in-out;
  color: ${(props) => props.theme.colorFont};

  &:hover{
    background: #4793FF;
    color: #fff;
  }
`;

const Button: React.FC = () => {
  return <StyledButton>На месяц</StyledButton>;
};

export default Button;
