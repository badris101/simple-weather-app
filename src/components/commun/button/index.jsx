import React from "react";
import { BtnContainer } from "./default";

export default () => {
  return (
    <BtnContainer>
      <button className="location-button">
        {" "}
        <i data-feather="map-pin" />
        <span>Change location</span>
      </button>
    </BtnContainer>
  );
};
