import React from "react";
import styled from "styled-components";

import { ReactComponent as SunSvg } from "../../assets/img/sun.svg";
import { useAppSelector } from "../../hooks/redux";
import Flex from "../helpers/Flex";

const StyledWrapper = styled.div`
  width: 400px;
  height: 300px;
  background: ${(props) => props.theme.bgCard};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 20px;

  & > div {
    font: normal 25px Montserrat;
    line-height: 30px;
    color: #939cb0;
  }

  .time,
  .citi {
    color: ${(props) => props.theme.colorGrey};
  }
`;

const StyledTemp = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 30px;
  span {
    margin: 0;
    &:first-child {
      font: 500 96px Montserrat;
      line-height: 117px;
      color: #4793ff;
    }

    &:last-child {
      font: normal 40px Montserrat;
      line-height: 49px;
      color: ${(props) => props.theme.colorFont};
    }
  }
`;

const TodayCard: React.FC = () => {
  const curreantWeather = useAppSelector(
    ({ currentWeather: { weather } }) => weather
  );

  return (
    <StyledWrapper>
      <StyledTemp>
        <div>
          <span>{curreantWeather?.main?.temp.toFixed()}&deg;</span>
          <br />
          <span>Сегодня</span>
        </div>
        <SunSvg />
      </StyledTemp>
      <div className="time">
        Время: {new Date().getHours() + ":" + new Date().getMinutes()}
      </div>
      <div className="citi">Город: {curreantWeather?.name}</div>
    </StyledWrapper>
  );
};

export default TodayCard;
