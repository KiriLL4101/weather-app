import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Days from "./components/Days";

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

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.bg};
`;

const themeDark = {
  bg: "#0D1117",
  bgCard: "#4F4F4F;",
  bgDay: "#2E3035",
  colorGrey: "#939CB0",
  colorFont: "#FFF",
};

const themeLight = {
  bg: "#FFF",
  bgCard: "#FFF",
  bgDay: "#FFF",
  colorGrey: "#939CB0",
  colorFont: "#000",
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  const onChangeTheme = () => setToggleTheme((prev) => !prev);

  React.useEffect(() => {
    dispatch(onLoadWeather());
  }, []);

  return (
    <ThemeProvider theme={toggleTheme ? themeDark : themeLight}>
      <StyledBackground>
        <StyledContainer>
          <Header onChangeTheme={onChangeTheme} />
          <Flex justify="space-between">
            <TodayCard />
            <DetailsToday />
          </Flex>
          <Days />
        </StyledContainer>
      </StyledBackground>
    </ThemeProvider>
  );
};

export default App;
