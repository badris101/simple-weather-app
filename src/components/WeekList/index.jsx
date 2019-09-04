import React, { useContext } from "react";
import { List } from "./default";
import WeekItem from "../WeekItem";
import WeatherContext from "../../WeatherContext";

const data = [
  {
    name: "Tuesday",
    short: "Tue",
    temp: "29"
  },
  {
    name: "Wednesday",
    short: "Wed",
    temp: "21"
  },
  {
    name: "Thursday",
    short: "Thu",
    temp: "08"
  },
  {
    name: "Friday",
    short: "Fry",
    temp: "19"
  }
];

export default () => {
  const { activeDay, setActiveDay } = useContext(WeatherContext);
  return (
    <List>
      {data.map((item, idx) => (
        <WeekItem
          key={idx}
          item={item}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      ))}
      <div className="clear" />
    </List>
  );
};
