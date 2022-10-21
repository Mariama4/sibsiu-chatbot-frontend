import Frames from "./pages/frames";
import Home from "./pages/home";
import Login from "./pages/login";
import Statistic from "./pages/statistic";
import Logs from "./pages/logs";
import {
  FRAMES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  STATISTIC_ROUTE,
  LOGS_ROUTE,
} from "./utils/consts";

const AuthRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: FRAMES_ROUTE,
    Component: Frames,
  },
  {
    path: STATISTIC_ROUTE,
    Component: Statistic,
  },
  {
    path: LOGS_ROUTE,
    Component: Logs,
  },
];
const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export { AuthRoutes, PublicRoutes };
