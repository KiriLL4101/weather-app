import React from "react";
import styled from "styled-components";

import DetailsToday from "./components/DetailsToday";
import Header from "./components/Header";
import Flex from "./components/helpers/Flex";
import TodayCard from "./components/TodayCard/inedx";
import { useAppDispatch } from "./hooks/redux";
import { onLoadWeather } from "./store/actions/weather";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 10px;
`;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(onLoadWeather());
  }, []);

  return (
    <StyledContainer>
      <Header />
      <Flex justify="space-between">
        <TodayCard />
        <DetailsToday />
      </Flex>
    </StyledContainer>
  );
};

export default App;
