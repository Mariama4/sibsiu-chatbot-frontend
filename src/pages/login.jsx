import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginReq } from "../http/userApi";
import { observer } from "mobx-react-lite";
import Context from "../utils/context";

import UserForm from "../components/UserForm";
import { HOME_ROUTE } from "../utils/consts";

const Login = observer(() => {
  useEffect(() => {
    document.title = "Sign in - SIBSIU";
  });

  let { user } = useContext(Context);
  const navigate = useNavigate();

  const onClick = async (email, password) => {
    await LoginReq(email, password)
      .catch((error) => {
        // оставлю так для дальнейшей обработки
        if (error.response.status === 500) {
          alert(error.response.data.message);
        } else {
          alert(error.response.data.message);
        }
      })
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        navigate(HOME_ROUTE);
      });
  };

  return <UserForm onClick={onClick} formType="login" />;
});

export default Login;
