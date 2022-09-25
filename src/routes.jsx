import SignIn from "./pages/login";
import { LOGIN_ROUTE } from "./utils/consts";

const AuthRoutes = [];
const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn,
  },
];

export { AuthRoutes, PublicRoutes };
