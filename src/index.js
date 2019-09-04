import React, { useState } from "react";
import ReactDOM from "react-dom";
import Weather from "./components/Weather";
import { GlobalStyle } from "./Global";
import { WeatherProvider } from "./WeatherContext";

function App() {
  const [activeDay, setActiveDay] = useState({
    name: "Tuesday",
    short: "Tue",
    temp: "29"
  });
  return (
    <WeatherProvider
      value={{
        activeDay: activeDay,
        setActiveDay: setActiveDay
      }}
    >
      <div className="App">
        <Weather />
        <GlobalStyle />
      </div>
    </WeatherProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
