import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import LandingPage from "./LandingPage.js";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
