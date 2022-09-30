import Constructor from "./pages/constructor";
import Frames from "./pages/frames";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import {
  CONSTRUCTOR_ROUTE,
  FRAMES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

const AuthRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: CONSTRUCTOR_ROUTE,
    Component: Constructor,
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
  // {
  //   path: REGISTRATION_ROUTE,
  //   Component: Registration,
  // },
];

export { AuthRoutes, PublicRoutes };
