import React from "react";
import { List } from "./default";

export default () => {
  return (
    <List>
      <li className="active">
        <i className="day-icon" data-feather="sun" />
        <span className="day-name">Tue</span>
        <span className="day-temp">29°C</span>
      </li>
      <li>
        <i className="day-icon" data-feather="cloud" />
        <span className="day-name">Wed</span>
        <span className="day-temp">21°C</span>
      </li>
      <li>
        <i className="day-icon" data-feather="cloud-snow" />
        <span className="day-name">Thu</span>
        <span className="day-temp">08°C</span>
      </li>
      <li>
        <i className="day-icon" data-feather="cloud-rain" />
        <span className="day-name">Fry</span>
        <span className="day-temp">19°C</span>
      </li>
      <div className="clear" />
    </List>
  );
};
