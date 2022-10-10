import Frames from "./pages/frames";
import Home from "./pages/home";
import Login from "./pages/login";
import { FRAMES_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "./utils/consts";

const AuthRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: FRAMES_ROUTE,
    Component: Frames,
  },
];
const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export { AuthRoutes, PublicRoutes };
