import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

const AuthRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];
const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
];

export { AuthRoutes, PublicRoutes };
