import React from "react";
import ReactDOM from "react-dom";
import Weather from "./components/Weather";
import { GlobalStyle } from "./Global";

function App() {
  return (
    <div className="App">
      <Weather />
      <GlobalStyle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
