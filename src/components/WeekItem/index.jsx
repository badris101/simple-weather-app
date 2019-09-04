import React from "react";
import { Item } from "./default";

export default ({ activeDay, setActiveDay, item }) => {
  return (
    <Item
      onClick={() => {
        setActiveDay(item);
      }}
      active={activeDay.name === item.name}
    >
      <i className="day-icon" data-feather="cloud-rain" />
      <span className="day-name">{item.short}</span>
      <span className="day-temp">{item.temp}°C</span>
    </Item>
  );
};
