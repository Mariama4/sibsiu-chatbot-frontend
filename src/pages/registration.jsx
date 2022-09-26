import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Registration as RegistrationReq } from "../http/userApi";
import { observer } from "mobx-react-lite";
import Context from "../utils/context";

import UserForm from "../components/UserForm";
import { LOGIN_ROUTE } from "../utils/consts";

const Registration = observer(() => {
  useEffect(() => {
    document.title = "Sign in - SIBSIU";
  });
  const navigate = useNavigate();

  const onClick = async (data) => {
    try {
      const res = await RegistrationReq(
        data.variables.email,
        data.variables.password,
        "USER"
      );
      user.setUser(res);
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
      alert("Signed up!");
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };

  return <UserForm action={onClick} formType="registration" />;
});

export default Registration;
