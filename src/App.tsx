import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import { useAppDispatch } from "./hooks/redux";
import { onLoadWeather } from "./store/actions/weather";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(onLoadWeather());
  }, []);

  return (
    <StyledContainer>
      <Header />
    </StyledContainer>
  );
};

export default App;
