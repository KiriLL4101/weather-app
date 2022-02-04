import React from "react";
import styled from "styled-components";

import Flex from "../helpers/Flex";
import DaysItem from "./DaysItem";
import Filters from "./Filters";

const StyledWrapper = styled(Flex)`
  background: #ffffff;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  padding: 20px;
`;

const Days: React.FC = () => {
  return (
    <>
      <Filters />
      <StyledWrapper justify="space-between">
        <DaysItem />
        <DaysItem />
        <DaysItem />
        <DaysItem />
        <DaysItem />
        <DaysItem />
      </StyledWrapper>
    </>
  );
};

export default Days;
