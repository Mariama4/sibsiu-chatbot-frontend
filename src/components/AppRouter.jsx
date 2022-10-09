import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import { AuthRoutes, PublicRoutes } from "../routes";
import Context from "../utils/context";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        AuthRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {PublicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {user.isAuth ? (
        <Route path="*" element={<Home />} />
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
});

export default AppRouter;
