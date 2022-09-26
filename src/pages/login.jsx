import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Login as LoginReq } from "../http/userApi";
import { observer } from "mobx-react-lite";
import Context from "../utils/context";

import UserForm from "../components/UserForm";

const Login = observer(() => {
  useEffect(() => {
    document.title = "Sign in - SIBSIU";
  });

  let { user } = useContext(Context);
  const navigate = useNavigate();

  const onClick = async (data) => {
    try {
      const res = await LoginReq(data.variables.email, data.variables.password);
      console.log(res);
      user.setUser(res);
      user.setIsAuth(true);
      console.log(user);
      // navigate("../");
      alert("Signed in!");
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };

  return <UserForm action={onClick} formType="login" />;
});

export default Login;
