import React from "react";
import styled from "styled-components";
import Select from "react-select";

import Flex from "../helpers/Flex";
import { ReactComponent as MainLogoSvg } from "../../assets/img/main-logo.svg";
import { ReactComponent as BlobSvg } from "../../assets/img/blob.svg";

const StyledHeader = styled(Flex)`
  margin-bottom: 30px;
  span {
    text-transform: uppercase;
    color: #4793ff;
    font: bold 25px Montserrat;
    line-height: 30px;
    margin-left: 20px;
  }

  .space {
    flex-grow: 1;
  }

  .space + svg {
    margin-right: 25px;
    cursor: pointer;
  }
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "rgba(71, 147, 255, 0.2)",
    width: "194px",
    height: "37px",
    border: "none",
    borderRadius: "10px",
    zIndex: 100,
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "#000",
  }),
};

const Header: React.FC<{ onChangeTheme: () => void }> = ({ onChangeTheme }) => {
  return (
    <StyledHeader align="center">
      <MainLogoSvg />
      <span>React weather</span>
      <div className="space" />
      <BlobSvg onClick={onChangeTheme} />
      <Select options={options} styles={colourStyles} />
    </StyledHeader>
  );
};

export default Header;
