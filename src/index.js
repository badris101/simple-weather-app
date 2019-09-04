import React, { useState } from "react";
import ReactDOM from "react-dom";
import Weather from "./components/Weather";
import { GlobalStyle } from "./Global";
import { WeatherProvider } from "./WeatherContext";
import SearchInput from "./components/commun/Input";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState("");
  const [activeDay, setActiveDay] = useState({
    name: "Tuesday",
    short: "Tue",
    temp: "29"
  });
  return (
    <WeatherProvider
      value={{
        activeDay: activeDay,
        setActiveDay: setActiveDay,
        setShowForm: setShowForm,
        term: term
      }}
    >
      <div className="App">
        <SearchInput showForm={showForm} term={term} setTerm={setTerm} />
        <Weather />
        <GlobalStyle />
      </div>
    </WeatherProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
