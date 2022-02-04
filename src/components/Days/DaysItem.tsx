import React from "react";
import styled from "styled-components";

import Flex from "../helpers/Flex";
import { ReactComponent as RainSvg } from "../../assets/img/rain.svg";

const StyledCard = styled(Flex)`
  width: 150px;
  height: 200px;
  background: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
  padding: 11px;

  .day {
    font: 500 18px Montserrat;
    line-height: 22px;
    color: #000;
    margin-bottom: 7px;
  }

  .data {
    font: normal 14px Montserrat;
    line-height: 17px;
    color: #939cb0;
    margin-bottom: 13px;
  }

  .temp {
    font: 500 18px Montserrat;
    line-height: 22px;
    color: #000;
  }

  .night {
    font: normal 13px Montserrat;
    line-height: 16px;
    color: #939cb0;
    margin-bottom: 6px;
  }

  .info {
    font: normal 13px Montserrat;
    line-height: 16px;
    color: #939cb0;
  }
`;

const DaysItem: React.FC = () => {
  return (
    <StyledCard direction="column">
      <div className="day">Сегодня</div>
      <div className="data">28 авг</div>
      <RainSvg />
      <div className="temp">+18°</div>
      <div className="night">+15°</div>
      <div className="info">Облачно</div>
    </StyledCard>
  );
};

export default DaysItem;
