import React from "react";
import { useAppDispatch } from "./hooks/redux";
import { onLoadWeather } from "./store/actions/weather";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(onLoadWeather());
  }, []);

  return <div>Main page</div>;
};

export default App;
