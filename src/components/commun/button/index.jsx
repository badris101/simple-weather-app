import React, { useContext } from "react";
import WeatherContext from "../../../WeatherContext";
import { BtnContainer } from "./default";

export default () => {
  const { setShowForm } = useContext(WeatherContext);
  return (
    <BtnContainer>
      <button className="location-button" onClick={() => setShowForm(true)}>
        <span>Search for another city</span>
      </button>
    </BtnContainer>
  );
};
