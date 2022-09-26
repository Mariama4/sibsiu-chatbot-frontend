import { AuthHost, Host } from "./index";
import jwtDecode from "jwt-decode";

const Registration = async (email, password, role) => {
  const { data } = await Host.post("api/user/registration", {
    email,
    password,
    role,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

const Login = async (email, password) => {
  const { data } = await Host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

const Check = async () => {
  const { data } = await AuthHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export { Registration, Login, Check };
