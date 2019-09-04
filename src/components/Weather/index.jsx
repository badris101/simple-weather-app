import React from "react";
import Button from "../commun/button";
import { Container } from "../commun/style";
import WeatherSide from "../WeatherSide";
import WeekList from "../WeekList";
import TodayInfos from "../TodayInfos";

export default () => {
  return (
    <Container>
      <WeatherSide />
      <div className="info-side">
        <TodayInfos />
        <WeekList />
        <Button />
      </div>
    </Container>
  );
};
