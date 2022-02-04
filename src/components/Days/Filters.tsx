import React from "react";
import styled from "styled-components";

import Flex from "../helpers/Flex";
import Button from "../helpers/Button";

const StyledWrapper = styled(Flex)`
  margin: 15px 0;

  & > button:not(:last-child) {
    margin-right: 10px;
  }

  div {
    flex-grow: 1;
  }
`;

const Filters: React.FC = () => {
  return (
    <StyledWrapper>
      <Button />
      <Button />
      <Button />
      <div />
      <Button />
    </StyledWrapper>
  );
};

export default Filters;
