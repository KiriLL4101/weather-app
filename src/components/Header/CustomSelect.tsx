import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 194px;
  position: relative;
  background: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
  margin-left: 25px;
  padding: 9px 20px;
  border: none;
  outline: none;
  color: #000;
  font: 500 16px Montserrat;
  line-height: 20px;

  &::-ms-expand {
    display: none;
  }

  &:after {
    content: '\f078';
    font: normal normal normal 17px/1 FontAwesome;
    color: #0ebeff;
    right: 11px;
    top: 6px;
    height: 34px;
    padding: 15px 0px 0px 8px;
    border-left: 1px solid #0ebeff;
    position: absolute;
    pointer-events: none;
`;

const CustomSelect: React.FC = () => {
  return (
    <StyledSelect>
      <option>123</option>
      <option>123</option>
      <option>123</option>
      <option>123</option>
    </StyledSelect>
  );
};

export default CustomSelect;
