import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Registration as RegistrationReq } from "../http/userApi";
import { observer } from "mobx-react-lite";
import Context from "../utils/context";

import UserForm from "../components/UserForm";

const Registration = observer(() => {
  useEffect(() => {
    document.title = "Sign in - SIBSIU";
  });

  const { user } = useContext(Context);
  const navigate = useNavigate();

  const onClick = async (data) => {
    try {
      await RegistrationReq(
        data.variables.email,
        data.variables.password,
        "USER"
      );
      user.setUser(user);
      user.setIsAuth(true);
      navigate("../");
      alert("Signed up!");
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };

  return <UserForm action={onClick} formType="registration" />;
});

export default Registration;
