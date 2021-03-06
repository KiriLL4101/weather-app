import React from "react";
import styled from "styled-components";

import Flex from "../helpers/Flex";
import { ReactComponent as TempSvg } from "../../assets/img/temp.svg";
import { ReactComponent as WindSvg } from "../../assets/img/wind.svg";
import { ReactComponent as PressureSvg } from "../../assets/img/pressure.svg";
import { ReactComponent as PrecipitationSvg } from "../../assets/img/precipitation.svg";
import Cloud from "../../assets/img/Cloud.png";
import { useAppSelector } from "../../hooks/redux";

const StyledWrapper = styled(Flex)`
  width: 750px;
  height: 300px;
  float: right;
  padding: 42px 31px;
  position: relative;
  overflow: hidden;

  background: ${(props) => props.theme.bgCard};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;

  font-size: 14px;

  &:after {
    content: "";
    position: absolute;
    width: 460px;
    height: 202px;
    top: 0px;
    left: 290px;
    z-index: 0;
    background-image: url(${Cloud});
  }

  .name {
    margin-right: 20px;
    color: #939cb0;
  }

  .description {
    color: ${(props) => props.theme.colorFont};
  }
`;

const StyledWrapSvg = styled.div`
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 49px;
`;

const DetailsToday: React.FC = () => {
  const curreantWeather = useAppSelector(
    ({ currentWeather: { weather } }) => weather
  );

  return (
    <StyledWrapper direction="column" justify="space-between">
      <Flex align="center">
        <StyledWrapSvg>
          <TempSvg />
        </StyledWrapSvg>
        <span className="name">Температура</span>
        <span className="description">
          {curreantWeather?.main?.temp.toFixed()}° - ощущается как{" "}
          {curreantWeather?.main?.feels_like.toFixed()}°
        </span>
      </Flex>
      <Flex align="center">
        <StyledWrapSvg>
          <PressureSvg />
        </StyledWrapSvg>
        <span className="name">Давление </span>
        <span className="description">{curreantWeather?.main?.pressure} мм ртутного столба - нормальное</span>
      </Flex>
      <Flex align="center">
        <StyledWrapSvg>
          <PrecipitationSvg />
        </StyledWrapSvg>
        <span className="name">Осадки</span>
        <span className="description">Без осадков</span>
      </Flex>
      <Flex align="center">
        <StyledWrapSvg>
          <WindSvg />
        </StyledWrapSvg>
        <span className="name">Ветер</span>
        <span className="description">{curreantWeather?.wind?.speed} м/с юго-запад - легкий ветер</span>
      </Flex>
    </StyledWrapper>
  );
};

export default DetailsToday;
