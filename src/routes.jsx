import Login from "./pages/login";
import Registration from "./pages/registration";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

const AuthRoutes = [];
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
