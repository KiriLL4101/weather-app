import React from "react";

import { ReactComponent as BlobSvg } from "./assets/img/blob.svg";
import { ReactComponent as MainLogoSvg } from "./assets/img/main-logo.svg";
import { ReactComponent as SunSvg } from "./assets/img/sun.svg";
import { ReactComponent as RainSvg } from "./assets/img/rain.svg";
import { ReactComponent as SmallRainSvg } from "./assets/img/small-rain.svg";
import { ReactComponent as SmallRainSunSvg } from "./assets/img/small-rain-sun.svg";
import { ReactComponent as MainlyCloudySvg } from "./assets/img/mainly-cloudy.svg";

const App: React.FC = () => {
  return (
    <div>
      <BlobSvg />
      <MainLogoSvg />
      <SunSvg />
      <MainlyCloudySvg />
      <SmallRainSvg />
      <SmallRainSunSvg />
      <RainSvg />
    </div>
  );
};

export default App;
