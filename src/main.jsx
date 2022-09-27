import React from "react";
import ReactDOM from "react-dom/client";
import UserStore from "./store/UserStore";
import App from "./App";
import Context from "./utils/context";
import "bootstrap/dist/css/bootstrap.min.css";
import BotConfigurationStore from "./store/BotConfigurationStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider
    value={{
      user: new UserStore(),
      botConfiguration: new BotConfigurationStore(),
    }}
  >
    <App />
  </Context.Provider>
);
