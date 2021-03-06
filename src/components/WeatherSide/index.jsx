import React, { useContext } from "react";
import { WeatherSideContainer } from "./default";
import WeatherContext from "../../WeatherContext";

export default () => {
  const { activeDay } = useContext(WeatherContext);
  return (
    <WeatherSideContainer>
      <div className="weather-gradient" />
      <div className="date-container">
        <h2 className="date-dayname">{activeDay.name}</h2>
        <span className="date-day">15 Jan 2019</span>
        <i className="location-icon" data-feather="map-pin" />
        <span className="location">Paris, FR</span>
      </div>
      <div className="weather-container">
        <i className="fas fa-sun" />
        <h1 className="weather-temp">{activeDay.temp}°C</h1>
        <h3 className="weather-desc">Sunny</h3>
      </div>
    </WeatherSideContainer>
  );
};
