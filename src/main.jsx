import React from "react";
import ReactDOM from "react-dom/client";
import UserStore from "./store/UserStore";
import App from "./App";
import Context from "./utils/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import BotConfigurationStore from "./store/BotConfigurationStore";
import FrameStore from "./store/FrameStrore";
import StatisticStore from "./store/StatisticStore";
import LogsStore from "./store/LogsStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider
    value={{
      user: new UserStore(),
      botConfiguration: new BotConfigurationStore(),
      frame: new FrameStore(),
      statistic: new StatisticStore(),
      logs: new LogsStore(),
    }}
  >
    <App />
  </Context.Provider>
);
