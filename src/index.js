import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Geolocation from "./Geolocation";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Geolocation />
  </StrictMode>,
  rootElement
);
