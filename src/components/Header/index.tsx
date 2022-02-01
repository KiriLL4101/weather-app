import React from "react";
import styled from "styled-components";

import Flex from "../helpers/Flex";
import { ReactComponent as MainLogoSvg } from "../../assets/img/main-logo.svg";
import { ReactComponent as BlobSvg } from "../../assets/img/blob.svg";
import CustomSelect from "./CustomSelect";

const StyledHeader = styled(Flex)`
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

`;

const Header: React.FC = () => {
  return (
    <StyledHeader align="center">
      <MainLogoSvg />
      <span>React weather</span>
      <div className="space" />
      <BlobSvg />
      <CustomSelect />
    </StyledHeader>
  );
};

export default Header;
