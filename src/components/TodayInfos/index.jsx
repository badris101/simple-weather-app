import React from "react";
import { TodayInfo } from "./default";

export default () => {
  return (
    <TodayInfo className="today-info">
      <div className="precipitation">
        {" "}
        <span className="title">PRECIPITATION</span>
        <span className="value">0 %</span>
        <div className="clear" />
      </div>
      <div className="humidity">
        {" "}
        <span className="title">HUMIDITY</span>
        <span className="value">34 %</span>
        <div className="clear" />
      </div>
      <div className="wind">
        {" "}
        <span className="title">WIND</span>
        <span className="value">0 km/h</span>
        <div className="clear" />
      </div>
    </TodayInfo>
  );
};
