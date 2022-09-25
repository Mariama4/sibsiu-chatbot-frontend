import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes, PublicRoutes } from "../routes";
import Context from "../utils/context";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        AuthRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {PublicRoutes.map(({ path, Component }) => (
        // console.log(Component)
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {/* <Route path="*" element={<Information />} /> */}
    </Routes>
  );
};

export default AppRouter;
